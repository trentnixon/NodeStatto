import React, { Component } from 'react';

// Actions
// import {ResetPlayer} from "../../../../actions/PreRender/Setup_Statto_UI";
import {BeginPlayerReset} from "../../../../actions/PreRender/ResetPlayers/BeginResetPlayer";

// Template
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FetchingTeams from "../../../Pages/Parents/Login/stateless/Login_FetchingTeams";

/*
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
*/ 

const ResetPlayer = new BeginPlayerReset();

 // Start Class
export default  class Login extends Component {
   FetchThisPlayer(Name, teamID,ID){
       //console.log(Name, teamID,ID, this.props)
       //ResetPlayer(Name, teamID,ID);

       ResetPlayer.NewPlayerName = Name;
       ResetPlayer.NewPlayerTeam = teamID;
       ResetPlayer.NewPlayerId = ID;

       ResetPlayer.Start();



       this.props.history.push(`/${teamID}/${ID}/`);
   } 
  componentWillMount() { }  
  render() {
    if(this.props.STAGE.position === false){
        return(<FetchingTeams PRONOUN={this.props.LABELS.LOADING.PRONOUN} Label={this.props.LABELS.LOADING.PLAYERROSTER} />  )
      } 
    else{
        return (
            <ul id="TeamSheet">
                {
                    this.props.DATA_SETUP.SelectTeamRoster.map((row,i)=>{                       
                            return(
                               
                                    <li key={i} className="HistoryItem" onClick={()=>{this.FetchThisPlayer(row.meta, this.props.DATA_SETUP.SelectTeamID, row.id)}} >
                                      <ListItem button  >
                                          <ListItemText primary={row.meta} className="RosterItem"/>
                                      </ListItem>  
                                     </li>
                            
                            ) 
                    })
                }
            </ul>
           ) 
    } 
  }
} 