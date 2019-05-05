import axios from 'axios';
import store from "../store/index"
import {FormGuide} from "./FormGuide";
import {ForAgainst} from "./ForAgainst";


var _ = require('lodash');
 
/**
 * This is the Object Function to fetch, clean and store the Players data to the Reducer
 * 
 */
export function FetchData(){

    /** Set Properties */
    this.id = null
    
    this.StoredData = [];
    this.FormGuide = [];


    this.CallsToApi =[
        {
            api:'/api/batting/',
            path:"STORE_BATTING"
        },
        {
            api:'/api/NonCountingBatting/',
            path:"STORE_NON_COUNTING_BATTING"
        },
        {
            api:'/api/bowling/',
            path:"STORE_BOWLING"
        },
        {
            api:'/api/NonCountingBowling/',
            path:"STORE_NON_COUNTING_BOWLING"
        },
        {
            api:'/api/Keeping/',
            path:"STORE_KEEPING"
        },
        {
            api:'/api/NonCountingKeeping/',
            path:"STORE_NON_COUNTING_KEEPING"
        }
    ]

    /** Set Methods */ 

    /**
     * FETCH METHODS
     */
    
    this.FetchData = (api,PATH) =>{  axios.get(api+this.id).then(res => { store.dispatch({ type:PATH, payload:res.data }); });}


    /**
     * SEQUENCE METHODS
     */ 

     /** START THE DATA MINE */
    this.start = () => {
        console.log(this.id);

        store.dispatch({ type:"INT_LOAD", payload:true });
        // eslint-disable-next-line

        // ping lms to see if user exists
        
        axios.get("/api/ping/"+this.id)
        .then(res => {  
            

            if(res.data.length !== 0){
                // eslint-disable-next-line
                //console.log(res.data); 
                store.dispatch({ type:"CURRENTNAME", payload:res.data});
                // eslint-disable-next-line 
                this.CallsToApi.map((api,i)=>{ this.FetchData(api.api,api.path);})
            }
            else if(res.data.length === 0){
                //console.log(res.data.length);
                store.dispatch({ type:"IDERROR", payload:true});
                store.dispatch({ type:"IDERROR", payload:false});
               // setTimeout(function(){ store.dispatch({ type:"IDERROR", payload:false})},20)
            }   
        });
    }


    /** CLEAN THE DATA MINE FOR STATTO */
    this.Clean =(data,type)=>{
        
        store.dispatch({ type:"DATA_CLEAN", payload:true});
        store.dispatch({ type:"SET_UI_MESG", payload:"Data Recieved! Cleaning In Progress" });

        /**
         * Store Fixture IDs
         */ 
        data.map((game,i)=>{
             
                let FixturePosition = _.findIndex(this.StoredData, function(o) { return o.Meta.Fixture === game["0"]["0"].id; });
               
                if(game["0"]["0"].id  !== '0'){ 

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
                
               //console.log( this.StoredData.reverse() );
                store.dispatch({ type:"STORE_CLEAN", payload:this.StoredData.reverse() });
            // Create ans Store Formguide and Baseline Stats
               return true;
        })

        this.Formguide(this.StoredData);
        ForAgainst(this.StoredData)
        
    }


    this.Formguide = (data)=>{
        // Send to Formguide 
        FormGuide(data)
    }

    this.ReadyUI =()=>{
            // Complete Data Fetch
            store.dispatch({ type:"SET_UI_MESG", payload:"Load Completed.." });
            store.dispatch({ type:"DATA_CLEAN", payload:false});
            store.dispatch({ type:"INT_LOAD", payload:false });
            store.dispatch({ type:"SET_UI_READY", payload:true });
    }

    /**
     * 
     * Aux Functions to assist with the process
     * 
     */


     this.StoreFixtures = (game) =>{
            
         let SplitDate = game["0"]["0"].meta.split('/');
         let Fixed = Math.floor(new Date( SplitDate[1]+'/'+SplitDate[0]+'/20'+SplitDate[2]).getTime()/1000);
         
         //let Fixed = new Date( SplitDate[2]+'/'+SplitDate[1]+'/'+SplitDate[0]).getTime();
        // console.log(SplitDate, Fixed)
            this.StoredData.push({
                Meta:{
                    Fixture:game["0"]["0"].id,
                    FixtureInt:Fixed,
                    Date:game["0"]["0"].meta,
                    Team:game[1]["0"].meta.replace(/[|&;$%@"<>()+,]/g, ""),
                    TeamID:game[1]["0"].id,
                    Opposition:game[2]["0"].meta.replace(/[|&;$%@"<>()+,]/g, ""),
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