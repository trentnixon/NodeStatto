import React, { Component } from 'react';

import TeamRosterList from "../../../Elements/Lists/Login_Teamsheet";

/*
import { Link } from "react-router-dom";
import {Animated} from "react-animated-css";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
*/


/*
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
*/

export default  class Login extends Component {
  componentWillMount() { } 
  render() {
      if(this.props.LOGIN.SELECTEDSTORED === true){
        return (
                    <TeamRosterList {... this.props}/>
           )
      }
      else if(this.props.LOGIN.SELECTEDSTORED === 'fecthing'){
        return (
            <div id="TeamSheet">
                 {this.props.LABELS.LOADING.PRONOUN} {this.props.LABELS.LOADING.PLAYERROSTER}
            </div>
           )
      }
      else{
        return(<div></div>)
      }    
  }
} 