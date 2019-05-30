import React, { Component } from 'react';
import FetchingTeams from "./Login_FetchingTeams";
import AutoComplete from "../../../Elements/FormElements/Login_AutoComplete";
import FetchingPlayerRoster from "./Login_FetchingPlayers";
import PlayersRosterComplete from "./Login_TeamRosterComplete";
//   <FromIDFeild />
export default class LoginForm extends Component {
  componentWillMount() {  

  } 
  render() {
        if(this.props.LOGIN.LOGIN === true && this.props.LOGIN.SELECTEDTEAMID === null){
                return (
                <div id="LoginForm">
                    <AutoComplete {... this.props}/>
                </div>
                )
        }
        else if(this.props.LOGIN.SELECTEDTEAMID != null && this.props.LOGIN.SELECTEDTEAMLIST === null){
            return(
                <FetchingPlayerRoster  TeamName={this.props.LOGIN.SELECTEDTEAMNAME } {... this.props}/>
            )
        }
        else if(this.props.LOGIN.SELECTEDTEAMID != null && this.props.LOGIN.SELECTEDTEAMLIST != null){
            return(
                <PlayersRosterComplete TeamName={this.props.LOGIN.SELECTEDTEAMNAME } {... this.props}/>
                
            )
        }
        else{
            return(
                <FetchingTeams {... this.props}/> 
            )
        }
  }
}   