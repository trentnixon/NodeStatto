import axios from 'axios';
import store from "../store/index"

export function FetchSelectedTeam(SelectedTeam){
  // Store ID
    store.dispatch({ type:"SAVE_SELECTED_ID", payload:SelectedTeam.id });
    store.dispatch({ type:"SAVE_SELECTED_NAME", payload:SelectedTeam.name });


    // Fetch Team List
    axios.get("/api/team/"+SelectedTeam.id)
    .then(res => {  
      if(res.data.length !== 0){
        
         let Players = []
         Object.keys(res.data[0]).map((row, i) => (
          Players.push(res.data[0][row][0])
        ))

          store.dispatch({ type:"SAVE_SELECTED_TEAMLIST", payload:Players });
         // Selected Team Stored
      store.dispatch({ type:"SELECTED_STORED", payload:true });
      }
      else if(res.data.length === 0){
          store.dispatch({ type:"IDERROR", payload:true});
          store.dispatch({ type:"IDERROR", payload:false});
      }   
  });

   

} 


export function fetchSheets(){
    this.range =["TeamList"];
    this.apiKey ="AIzaSyCLKORa4sPdatcYl-yGvqLmjsXCsk5_CFM";
    this.discoveryDocs =["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    this.spreadsheetId ="17go9k3PGDsk9JM1nAVwDwUESrI-ZhShbRfr9rDOwNMk";
    this.results=[];


   this.initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client.init({
            apiKey: this.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
            discoveryDocs: this.discoveryDocs
      })
      .then(() => {
      // 3. Initialize and make the API request.
      // eslint-disable-next-line
      this.range.map((range,i)=>{
            console.log(range);
            this.load(this.onLoad,range,i);
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
                  //console.log(response.result.values);
                  this.Store(response.result.values, range)
                  store.dispatch({ type:"UI_SET", payload:true });
                  
              },
              response => {
                callback(false, response.result.error);
              }
            );
        });
      }

      this.fetch =()=>{
        console.log("Fetch Sheets");
        window.gapi.load("client", this.initClient); 
    }

    this.Store =(data,int)=>{
        this.results.push({"Name":int,"Data":data})
        

        if(this.results.length === this.range.length){
            console.log(this.results["0"].Data)
            store.dispatch({ type:"SAVE_SHEET", payload:this.results["0"].Data });
            store.dispatch({ type:"SHEET_STORED", payload:true });
        }
       
    }
}

export function ResetLogin (){
  console.log("Reset") 
  store.dispatch({ type:"SAVE_SELECTED_ID", payload:null});
  store.dispatch({ type:"SAVE_SELECTED_NAME", payload:null});
  store.dispatch({ type:"SELECTED_STORED", payload:null});
  store.dispatch({ type:"SAVE_SELECTED_TEAMLIST", payload:null});
  
}