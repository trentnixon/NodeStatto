import React from 'react';
import {Animated} from "react-animated-css";
import { Link } from 'react-router-dom';

//import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';


let batting,Bowling;
const List_History = (props) => (

        props.Games.map((game,i)=>{ 
                let  IsVisable =  props.isVisible === true ? 'show':'';

                batting='';
                Bowling=''
                let Delay= 200*i;
                let Text = game.Meta.Team +" vs "+ game.Meta.Opposition;
                // let year = game.Meta.Date.split('/')

                if(game.Batting){ batting = game.Batting.RunsValue +" from "+ game.Batting.BallsFaced;}
                if(game.Bowling){ Bowling = game.Bowling.Figures +" off "+ game.Bowling.Overs;}
              
                return(
                    <Animated  
                        key={i} 
                        animationIn="flipInX"
                        isVisible={props.isVisible}
                        animationInDelay={Delay}  
                        animateOnMount={false}
                        className={IsVisable + " HistoryItem" }
                        once
                    >
                        <div className="ListItem">

                            <div className="GameTitle">
                                <h1>{Text}</h1>
                            </div>
                            <div className="GameDate">
                                <small>{game.Meta.Date}</small>
                            </div>

                            <div className="GameBatting">
                                <h2>{batting}</h2>
                            </div>
                            <div className="GameBowling">
                                <h2>{Bowling}</h2>
                            </div>
                            <div className="GameCTA"> 
                            <IconButton aria-label="Scorecard" component={Link} to={`/${props.match.params.playerid}/scorecard/${game.Meta.Fixture}`}>
                                    <LaunchIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Animated>
                )
        })
);
export default List_History; 


/**
 * 
                        <ListItem button >
                            
                            <ListItemText 
                                primary={Text}
                                secondary={game.Meta.Date}
                               
                            />
                            <ListItemText 
                                 primary={batting }
                                 secondary={Bowling}
                                
                            />
                           
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Scorecard" component={Link} to={`/${props.match.params.playerid}/scorecard/${game.Meta.Fixture}`}>
                                    <LaunchIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem> 
 */