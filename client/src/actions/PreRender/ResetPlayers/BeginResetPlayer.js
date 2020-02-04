
import {LoginSequence as DS} from "../ProcessPlayer/LoginSequencing/PrivateFunctions"
import {FetchData} from "../ProcessPlayer/BeginPlayerProcessing"

const Content = new FetchData(); 

export function BeginPlayerReset(){ 

        this.NewPlayerName=null
        this.NewPlayerId=null; 
        this.NewPlayerTeam=null


        this.Start = ()=>{

            // Check to make sure all new Variables for the new player are true
            console.log("Begin Reset New Player = " + this.NewPlayerName)
            
            // Then Reset UI
            this.ResetUIState();  
        }

        this.ResetUIState = ()=>{
                // Reset the UI back to a controled State
                DS( [{Type:'COMPLETE_STATE_RESET', Value:false} ]);
                // Reset Data
                this.ResetData();
        }
        this.ResetData = ()=>{
                // Reset The Data Reducers
                DS([{Type:'DATA_PLAYER_RESET',  Value:false}])

                this.BeginFetch();
        }
        this.BeginFetch =()=>{
            DS([
                {Type:'LOGINSEQUENCE_INIT',  Value:true},
                {Type:'LOGINSEQUENCE_STAGE2',  Value:true},
                {Type:'LOGINSEQUENCE_STAGE3',  Value:true},
                {Type:'LOGINSEQUENCE_STAGE_ID', Value:2},
                {Type:'DATA_STORE_PRIMARY_NAME', Value:this.NewPlayerName}]);

            
            Content.id=this.NewPlayerId;
            Content.StoredData = []; 
            Content.FormGuide = []; 

            Content.start();
 

        }

}