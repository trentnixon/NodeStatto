import axios from 'axios';
import {LoginSequence as LS,LoginSequence as DS, LoginSequence as ES} from "./LoginSequencing/PrivateFunctions";
import {CareerObj, ExportCareerObj} from "./Career/CareerObj"

//import {ForAgainst} from "./ForAgainst";
// 1.
import CleanData from "./CleanPlayerData";
// 2.
import CreateCareer from "./CreateCareer";
// 3. For Against
import CreateForAganist from "./ForAgainst/CreateForAgainst";

const ProcessClean = new CleanData();
const ProcessCareer = new CreateCareer();
const ProcessForAgainst = new CreateForAganist(); 


// var _ = require('lodash');
 

// FetchPlayer

/**
 * This is the Object Function to fetch, clean and store the Players data to the Reducer
 * 
 * 
 * 
 * - Fetch / API
 * - Clean Data 
 * - Create Carrer Stats
 * - Create Form Guide
 * - Create For and Against
 * - Set UI
 * 
 * 
 */ 


 // TO DO : Refactor Form guide

 /** THIS FUNCTION FETCHES THE DATA FROM THE API AND HANDS IT OFF FOR PROCESSING */
export function FetchData(){
 
    /** Set Properties */ 
    this.id = null;
    this.FetchedPlayer =null;
    this.StoredData = []; 
    this.FormGuide = []; 
    this.NewcareerObject={}
     /** 
      * 
      * START THE DATA MINE 
      * 
      */

    this.start = () => {
        this.NewcareerObject = Object.assign({}, CareerObj)
        // Store Data
        DS([ 
            {Type:'DATA_STORE_SELECTED_PLAYER_ID',  Value:this.id}, 
            {Type:'DATA_STORE_PRIMARY_PLAYER_ID',  Value:this.id}])
        // Set UI to LOAD
        LS([
            {Type:'LOGINSEQUENCE_STAGE3',  Value:true},
            { Type:'LOGINSEQUENCE_STAGE_ID', Value:3},
            {Type:'LOGINSEQUENCE_STAGE_POSITION',  Value:false},
        ]);
        
        // Ping LMS to fetch the players Data 
        axios.get("/api/ping/"+this.id)
        .then(res => {  
            
            if(res.data.length !== 0){ 
                
                // clear out Array
                this.StoredData = [];
                this.FormGuide = []; 

                // Set UI and Data, Store Meta 
                console.log('DATA_RECEIVED');
            
                // Send the Data to be Cleaned
                //console.log("res.data.length",res.data, res.data.Batting.length)
                ProcessClean.RestoreClass(); 
                ProcessClean.Clean(res.data)

                // Set Meta Data
                DS([
                    {Type:'DATA_STORE_PRIMARY_META',  Value:res.data.Meta},
                    {Type:'DATA_STORE_PRIMARY_NAME', Value:res.data.Meta.Name}
                ]);
                // Store Meta Data
                    console.log('META DATA STORED');
                // Move Sequence along
                LS([ {Type:'DATA_SET_LOAD_META',  Value:true}]);

                // Move to Career
                if(ProcessClean.Completed){
                    // Pass Cleaned Data to Career Processing 
                    ProcessCareer.Restore()
                    ProcessCareer.Clean = ProcessClean.StoreData;
             
                    let NewObj = ExportCareerObj()
                    ProcessCareer.CareerObj =  NewObj.Career;
                    // Int Career Process
                    ProcessCareer.Start();   
                }

                // Move to For and Against
                if(ProcessCareer.Completed){
                    ProcessForAgainst.Clean = ProcessClean.StoreData;
                    //console.log(ProcessCareer.Completed)
                    ProcessForAgainst.Start()
                }
            }

            else if(res.data.length === 0){
                const arr=[
                    { Type:'IDERROR', Value:true},
                    { Type:'IDERROR', Value:false }
                  ];
                  // Show errors if required
                  ES(arr)
            }  

        });   
    }
}