import axios from 'axios';
import {LoginSequence} from "./PrivateFunctions";
import {FormGuide} from "./FormGuide";
import {ForAgainst} from "./ForAgainst";
var _ = require('lodash');
 
/**
 * This is the Object Function to fetch, clean and store the Players data to the Reducer
 * 
 * 
 * 
 * - Fetch / API
 * - Clean Data
 * - Create Form Guide
 * - Create For and Against
 * - Set UI
 * 
 * 
 */
export function FetchData(){

    /** Set Properties */ 
    this.id = null;
    this.StoredData = []; 
    this.FormGuide = []; 

     /** 
      * 
      * START THE DATA MINE 
      * 
      */
// 
// 

    this.start = () => {

        // Set UI to LOAD

   
        LoginSequence([
            {Type:'LOGINSEQUENCE_STAGE3',  Value:true},
            { Type:'LOGINSEQUENCE_STAGE_ID', Value:3},
            {Type:'LOGINSEQUENCE_STAGE_POSITION',  Value:false},
            {Type:'DATA_STORE_SELECTED_PLAYER_ID',  Value:this.id},
            {Type:'DATA_STORE_PRIMARY_PLAYER_ID',  Value:this.id},
            
        ]);
        

        // Ping LMS to fetch the players Data
        //console.log(this.id);
        axios.get("/api/ping/"+this.id)
        .then(res => {  
            
            if(res.data.length !== 0){ 
                
                // clear out Array
                this.StoredData = [];
                this.FormGuide = []; 

                // Set UI and Data, Store Meta 
                console.log('DATA_RECEIVED',res.data, res.data.Meta);
                console.log('META DATA STORED');

                // Send the Data to be Cleaned
                let BattingStored = this.Clean(res.data.Batting,1)
                let BowlingStored = this.Clean(res.data.Bowling,2)
                //uncomment when Keeping Stats are live
                //this.Clean(res.data.Keeping,3)

                //LoginSequence([{Type:'STORE_NAME',  Value:res.data.Meta.Name}]);
                LoginSequence([
                    {Type:'DATA_STORE_PRIMARY_META',  Value:res.data.Meta},
                    {Type:'DATA_SET_LOAD_META',  Value:true},
                    {Type:'DATA_SET_LOAD_CLEAN',  Value:true},
                    {Type:'INT_SET_PLAYERDATA_RECIEVED',  Value:true}
                ]);

                // Once the Data has been Cleaned, Run any Additoinal logic and set the UI to true
                if(BattingStored === true && BowlingStored === true){

                    console.log("CLEANED DATA AND STORED");
                    
                    FormGuide(this.StoredData)
                    ForAgainst(this.StoredData)

                }
               
            }
            else if(res.data.length === 0){
                const arr=[
                    { Type:'IDERROR', Value:true},
                    { Type:'IDERROR', Value:false }
                  ];
                LoginSequence(arr)
            }   
        });   
    }



    /** END API END POINT CALL */
    /** 
     * 
     * CLEAN THE DATA MINE FOR STATTO 
     * 
     * */
    this.Clean =(data,type)=>{
    
      
        /**
         * Store Fixture IDs
         */ 
        data.map((game,i)=>{
             let path = game["0"]["0"];
      
                let FixturePosition = _.findIndex(this.StoredData, function(o) { return o.Meta.Fixture === path.id; });
               
                if(path.id  !== '0'){ 

                    if(FixturePosition === -1){
                        let FixturePosition = this.StoreFixtures(game);
                        if(type === 1){ this.StoreBatting(game, FixturePosition) }
                        if(type === 2){ this.StoreBowling(game, FixturePosition) }
                        if(type === 3){ this.StoreKeeping(game, FixturePosition) }
                    }
                    else{
                        if(type === 1){ this.StoreBatting(game, FixturePosition) }
                        if(type === 2){ this.StoreBowling(game, FixturePosition) }
                        if(type === 3){ this.StoreKeeping(game, FixturePosition) }
                    }
                }
                
            // Store Cleaned Data to Reducer
                this.StoredData = _.sortBy(this.StoredData, [function(o) { return o.Meta.FixtureInt; }],['desc']);
                LoginSequence([{ Type:"DATA_STORE_PRIMARY_CLEAN", Value:this.StoredData.reverse() }])
              
               return true;
        })
        // Store Clean Loaded        
        return true;
    }


    /**
     * 
     *  UI STATE CHANGES
     * 
     */
    //this.STOREUITRUE = (Path,Value)=>{ store.dispatch({ type:Path, payload:Value }) }
  
    this.SetStattoReady = (LOAD) =>{
       //console.log(LOAD);
        if( LOAD.CAREER === true && LOAD.CLEAN === true &&
            LOAD.FORAGAINST === true && LOAD.META === true)
            {
                LoginSequence([{ type:"INT_SET_SATTTO_TRUE", payload:true}])
            }
    }

    /**
     * 
     * Aux Functions to assist with the process
     * 
     */

    this.STRReplace = (str) =>{
        str = str.replace('&apos;',"'").replace('&amp;','&').replace('&#x2019;',"'")
        return str;
    }

     this.StoreFixtures = (game) =>{
            
         let SplitDate = game["0"]["0"].meta.split('/');
         let Fixed = Math.floor(new Date( SplitDate[1]+'/'+SplitDate[0]+'/20'+SplitDate[2]).getTime()/1000);
         
         //let Fixed = new Date( SplitDate[2]+'/'+SplitDate[1]+'/'+SplitDate[0]).getTime();
         //console.log(SplitDate, Fixed)
     
           // console.log(game[2]["0"].meta, game[2]["0"].meta.replace('&apos;',"'").replace(['&amp;'],'&'));
        
            this.StoredData.push({
                Meta:{
                    Fixture:game["0"]["0"].id,
                    FixtureInt:Fixed,
                    Date:game["0"]["0"].meta,
                    Team: this.STRReplace(game[1]["0"].meta) ,
                    TeamID:game[1]["0"].id,
                    Opposition: this.STRReplace(game[2]["0"].meta),
                    OppositionID:game[2]["0"].id,
                }
            })
            
            let FixturePosition = _.findIndex(this.StoredData, function(o) { return o.Meta.Fixture === game["0"]["0"].id; });
            return FixturePosition;
     }


     this.StoreBatting = (game,FixturePosition) =>{

            let NoutOut=0;
            if(game[3].indexOf("*") !== -1){ NoutOut=1 }

            this.StoredData[FixturePosition]["Batting"]={
                RunsValue: game[3],
                RunInt:parseInt(game[3], 10),
                BallsFaced:game[4],
                BallsFacedInt:parseInt(game[4], 10),
                Ranking:game[11],
                NotOut:NoutOut
            }
     }

     this.StoreBowling = (game,FixturePosition) =>{

        let SplitFigures =  game[4].split("/");
        this.StoredData[FixturePosition]["Bowling"]={
                    Overs: game[3],
                    OversInt:parseInt(game[3], 10),
                    Figures:game[4],
                    Wickets:SplitFigures[0],
                    Runs:SplitFigures[1],
                    Ranking:game[11]
            }
    }

    this.StoreKeeping = (game,FixturePosition) =>{
        this.StoredData[FixturePosition]["Keeping"]={
                    catches: parseInt(game[3], 10),
                    stumping:parseInt(game[4], 10),
                    Ranking:game[11]
            }
    }
}