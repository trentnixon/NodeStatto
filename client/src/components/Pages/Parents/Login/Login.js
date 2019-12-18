import React, { Component } from 'react';
import { matchPath } from 'react-router'
import {FetchSelectedTeam} from "../../../../actions/Setup_Statto_UI"
//ResetPlayer
//import {LoginSequence} from "../../../../actions/PrivateFunctions";
import { FetchData } from "../../../../actions/Calculate_Player_Statistics";

// Stateless Component
import LoginShell from "./stateless/LoginShell";
// Logic Components
import LoginForm from "./logic/Login_InputField";

const Content = new FetchData();

export default  class Login extends Component {

  match(match,StoredMatch){
      let Stage = this.props.LOADSEQUENCE.LoginSequence.stage
      // Team Ids 
      //console.log(match.params.teamid,StoredMatch.SelectTeamID)
      if(Stage.id  === 1 && Stage.position  === true ){  
          // Start with the Team ID
          console.log("Stage 1")
          if(match.params.teamid !== StoredMatch.SelectTeamID){
              console.log("NO MATCH")          
              FetchSelectedTeam(match.params.teamid)
          }
      }else if(this.props.LOADSEQUENCE.LoginSequence.stage.id === 2  && Stage.position  === true ){
          console.log("Stage 2")
          if(match.params.playerid && match.params.playerid !== StoredMatch.SelectedPlayerID ){
             //console.log("Reset Player Deets and Find New Player",match.params.playerid);
            // ResetPlayer();
             Content.id=match.params.playerid;
             Content.start();
          }
      }
  }
  componentWillMount() {  }   

  render() { 
    let match 
    let matchPlayer = matchPath(this.props.history.location.pathname, { path: '/:teamid/:playerid',})
    
    if(matchPlayer !== null){
      match = matchPlayer
      this.match(match,this.props.DATA_SETUP)
    }
    else{
       match = matchPath(this.props.history.location.pathname, { path: '/:teamid',})
       if(match !== null ){
        this.match(match,this.props.DATA_SETUP)
       }
    }

    //console.log(this.props.ERRORS.ERROR)
   if(this.props.ERRORS.ERROR !== true){
    return ( 
      <LoginShell {... this.props}>
          <LoginForm  StattoMatch={match} LOGIN={this.props.LOGIN} {... this.props} />                       
      </LoginShell>
    )
   }
   else{
     return(
      <LoginShell {... this.props}>
         <h1>ERROR- Create a Error </h1>
       </LoginShell>
     )
   }
  }
}