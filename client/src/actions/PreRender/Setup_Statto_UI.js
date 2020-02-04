import axios from 'axios';
//import store from "../../store/index"
import {LoginSequence} from "../PreRender/ProcessPlayer/LoginSequencing/PrivateFunctions";
import {FetchData} from "./ProcessPlayer/BeginPlayerProcessing"

 
// INIT Functions
/* ********************************************************************************************* */
// Fetch GSheet team list
/* ********************************************************************************************* */
/* ********************************************************************************************* */
export function fetchSheets(){
  this.range =["TeamList"];
  this.apiKey ="AIzaSyCLKORa4sPdatcYl-yGvqLmjsXCsk5_CFM";
  this.discoveryDocs =["https://sheets.googleapis.com/$discovery/rest?version=v4"];
  this.spreadsheetId ="17go9k3PGDsk9JM1nAVwDwUESrI-ZhShbRfr9rDOwNMk";
  this.results=[];
 
    this.initClient = () => {
      window.gapi.client.init({
              apiKey: this.apiKey,
              discoveryDocs: this.discoveryDocs
        })
        .then(() => {
            this.range.map((range,i)=>{ 
                  this.load(this.onLoad,range,i);
                  return true;
            })
      });
    };

    this.load = (callback,range,int) => {

        window.gapi.client.load("sheets", "v4", () => {
          window.gapi.client.sheets.spreadsheets.values
            .get({    
              spreadsheetId: this.spreadsheetId,
              range: range+"!A2:Z"
            })
            .then(
              response => {
                  this.Store(response.result.values, range)
              },
              response => {
                  callback(false, response.result.error);
              }
            );
        });
      }

    this.fetch =()=>{
      window.gapi.load("client", this.initClient); 
  }

  this.Store =(data,int)=>{
      this.results.push({"Name":int,"Data":data})
      
      if(this.results.length === this.range.length){

          const arr=[
            { 
              Type:'DATA_STORE_GOOGLE_TEAM_LIST', 
              Value:this.results["0"].Data 
            },
            {
              Type:'LOGINSEQUENCE_INIT', 
              Value:true
            }, {
              Type:'LOGINSEQUENCE_STAGE_ID', 
              Value:1
            },{
              Type:'LOGINSEQUENCE_STAGE_POSITION',
              Value:true
            }
          ];

          LoginSequence(arr)
      } 
  }
}



/* ********************************************************************************************* */
// Fetch Select Team for display in form
/* ********************************************************************************************* */
/* ********************************************************************************************* */


export function FetchSelectedTeam(SelectedTeam){ 

    //DATA_STORE_SELECTED_TEAM_ID
    LoginSequence([{Type:'DATA_STORE_SELECTED_TEAM_ID',  Value:SelectedTeam}]);
    LoginSequence([{Type:'LOGINSEQUENCE_STAGE_POSITION',  Value:false}]);

    // Fetch Team List
    axios.get("/api/team/"+SelectedTeam)
    .then(res => {  
      //console.log(res.data)
      if(res.data.length !== 0){
      
         let Players = []
          Object.keys(res.data[0]).map((row, i) => (
            Players.push(res.data[0][row][0])
          ))

          const arr=[{   
                Type:'DATA_STORE_SELECTED_TEAM_ROSTER', Value:Players
            },{ Type:'LOGINSEQUENCE_STAGE2', Value:true
            },{ Type:'LOGINSEQUENCE_STAGE_ID', Value:2},
              { Type:'LOGINSEQUENCE_STAGE_POSITION', Value:true}
            ];

          LoginSequence(arr)
      }
      else if(res.data.length === 0){
          const arr=[
            { Type:'IDERROR', Value:1},
            { Type:'ERROR', Value:true }
          ];
          LoginSequence(arr)
      }   
  });
} 

/* ********************************************************************************************* */
// Prepare Statto UI Ready
/* ********************************************************************************************* */
/* ********************************************************************************************* */

export function StattoReady(){
  const arr=[
            {Type:'LOGINSEQUENCE_STAGE5', Value:true},
            {Type:'LOGINSEQUENCE_STAGE_POSITION', Value:true},
            {Type:'INT_SET_UI_READY', Value:true},
            {Type:'INT_SET_STATTO_READY', Value:true},
            {Type:'INT_SET_LOGIN_COMPLETE', Value:true},
            
            
      ];

      LoginSequence(arr)
}

/* ********************************************************************************************** */
//Store Selected Player 
export function StoreName(Name){
  LoginSequence([{Type:'DATA_STORE_PRIMARY_NAME', Value:Name}]) 
}


/* ********************************************************************************************* */
// Reset Statto
/* ********************************************************************************************* */
/* ********************************************************************************************* */

function FlattenUI(Name){
  const arr=[
            
    // Amend SwitchBoard
    {Type:'INT_SET_LOGIN_COMPLETE', Value:false},
    {Type:'LOGINSEQUENCE_STAGE_ID', Value:1},
    {Type:'LOGINSEQUENCE_STAGE3', Value:false},
    {Type:'LOGINSEQUENCE_STAGE4', Value:false},
    {Type:'LOGINSEQUENCE_STAGE5', Value:false},
    {Type:'LOGINSEQUENCE_STAGE_POSITION',  Value:false},
    {Type:'DATA_SET_LOAD_META',  Value:false},
    {Type:'DATA_SET_LOAD_CLEAN',  Value:false},
    {Type:'DATA_SET_LOAD_CAREER',  Value:false},
    {Type:'DATA_SET_FORAGAINST',  Value:false},
     
    // Clear out Data
    {Type:'DATA_STORE_SELECTED_PLAYER_ID',  Value:false},
    {Type:'DATA_STORE_PRIMARY_PLAYER_ID',  Value:false},
    {Type:'DATA_STORE_PRIMARY_META',  Value:false},
    {Type:'DATA_STORE_PRIMARY_FORAGAINST',  Value:false},
    {Type:'DATA_STORE_PRIMARY_CLEAN',  Value:false},
    {Type:'DATA_STORE_PRIMARY_CAREER',  Value:false},
    {Type:'DATA_STORE_PRIMARY_FOR',  Value:false},
    {Type:'DATA_STORE_PRIMARY_AGAINST',  Value:false},
    {Type:'DATA_STORE_PRIMARY_NAME',  Value:Name},
    
];

  LoginSequence(arr)
}

export function ResetPlayer(Name, teamID,ID){
  
    console.log("ResetPlayer - FIX THIS");
    console.log(Name, teamID,ID)

  /* 
    store.dispatch({ type:"STORE_CLEAN", payload:null });
    store.dispatch({ type:"STORE_META", payload:null });
    store.dispatch({ type:"STORE_CAREER", payload:null });
    store.dispatch({ type:"STORE_FOR", payload:null });
    store.dispatch({ type:"STORE_AGAINST", payload:null });
  */
          
      FlattenUI(Name)
      const Content = new FetchData();
      Content.id=ID;
      Content.start();

}


export function SelectNewPlayer(){}


export function ResetTeams(){
  FlattenUI(false)

  const arr=[
    // Amend SwitchBoard
    {Type:'DATA_STORE_SELECTED_TEAM_ID', Value:false},
    {Type:'DATA_STORE_SELECTED_TEAM_ROSTER', Value:false},
    {Type:'LOGINSEQUENCE_STAGE_POSITION', Value:true},    
  ];
  LoginSequence(arr)
}

/*
export function ResetLogin (){
  console.log("Reset") 
  store.dispatch({ type:"SAVE_SELECTED_ID", payload:null});
  store.dispatch({ type:"SELECTED_STORED", payload:null});
}
*/