import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Animated} from "react-animated-css";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {ResetPlayer} from "../../../actions/Login";
/*
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
*/

import { FetchData } from "../../../actions/Load";
const Content = new FetchData();


export default  class Login extends Component {
   FetchThisPlayer(id){
      //  console.log("Fetch This Player", id)
        ResetPlayer();
        Content.id=id;
        Content.start(); 
   } 
  componentWillMount() { } 
  render() {
     // console.log(this.props.LOGIN.SELECTEDTEAMLIST)
      return (
        <ul id="TeamSheet">
            {
                this.props.LOGIN.SELECTEDTEAMLIST.map((row,i)=>{
                    let  IsVisable =  this.props.isVisible === true ? 'show':'';
                    let Delay= 100*i;
                        //console.log(row)
                        return(
                            <Animated   
                                key={i} 
                                animationIn="flipInX"
                                isVisible={this.props.isVisible}
                                animationInDelay={Delay}  
                                animateOnMount={false}
                                className={IsVisable + " HistoryItem" }
                            >
                                <li>
                                 <ListItem button  onClick={()=>{this.FetchThisPlayer(row.id)}} component={Link} to={`/${row.id}/`} >
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