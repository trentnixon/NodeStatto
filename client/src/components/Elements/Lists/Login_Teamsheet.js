import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Animated} from "react-animated-css";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';


export default  class Login extends Component {
  componentWillMount() { } 
  render() {
      console.log(this.props.LOGIN.SELECTEDTEAMLIST)
      if(this.props.LOGIN.SELECTEDSTORED=== true){
        return (
            <ul id="TeamSheet">
                {
                    this.props.LOGIN.SELECTEDTEAMLIST.map((row,i)=>{
                        let  IsVisable =  this.props.isVisible === true ? 'show':'';
                        let Delay= 200*i;
                            console.log(row)
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
                                     <ListItem button component={Link} to={`/${row.id}/`} >
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
      else if(this.props.LOGIN.SELECTEDSTORED === 'fecthing'){
        return (
            <div id="TeamSheet">
                 Fetching Player List for "Team"
            </div>
           )
      }
      else{
        return(<div></div>)
      }    
  }
} 