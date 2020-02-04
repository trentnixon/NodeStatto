import React, { Component } from 'react';

// Stateless Components
import FetchingTeams from "../stateless/Login_FetchingTeams"; 

import AutoComplete from "../../../../Venders/MaterialUI/FormElements/Login_AutoComplete";
import TeamRosterList from "../../../../Venders/MaterialUI/Lists/Login_Teamsheet";

let STAGE=0
export default class LoginForm extends Component {
   
    renderSwitch(STAGE) {
       
        switch(STAGE.id) {
            case 1:
              return   <AutoComplete STAGE={STAGE} {... this.props}/>;
              // eslint-disable-next-line
              break;
            case 2: 
                return <TeamRosterList STAGE={STAGE}  {... this.props}/>
                // eslint-disable-next-line
              break;
            case 3:
                return <FetchingTeams PRONOUN="" Label={this.props.LABELS.LOADING.BUILDING} /> 
              // eslint-disable-next-line
                break;
        
            default:
               return <FetchingTeams  PRONOUN={this.props.LABELS.LOADING.PRONOUN} Label={this.props.LABELS.LOADING.PRELOADTEAMS} /> 
          } 
      } 
      
  render() {
    STAGE = this.props.LOADSEQUENCE.LoginSequence.stage ;
    return(  <div> { this.renderSwitch(STAGE) }</div> )
  }
}   