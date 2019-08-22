import React, { Component } from 'react';
import {Animated} from "react-animated-css";

// Actions
import {ResetPlayer} from "../../../actions/Setup_Statto_UI";

// Template
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FetchingTeams from "../../Pages/Parents/Login/stateless/Login_FetchingTeams";

/*
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
*/

 // Start Class
export default  class Login extends Component {
   FetchThisPlayer(Name, teamID,ID){
       //console.log(Name, teamID,ID, this.props)
       ResetPlayer(Name, teamID,ID)
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
                        let  IsVisable =  this.props.isVisible === true ? 'show':'';
                        let Delay = 50*i;
                       
                            return(
                                <Animated   
                                    key={i} 
                                    animationIn="flipInX"
                                    isVisible={this.props.isVisible}
                                    animationInDelay={Delay}  
                                    animateOnMount={false}
                                    className={IsVisable + " HistoryItem" }
                                >
                                    <li onClick={()=>{this.FetchThisPlayer(row.meta, this.props.DATA_SETUP.SelectTeamID, row.id)}} >
                                     <ListItem button  >
                                        <ListItemText primary={row.meta} className="RosterItem"/>
                                     </ListItem> 
                                     </li>
                                </Animated>
                            )
                    })
                }
            </ul>
           ) 
    } 
  }
} 