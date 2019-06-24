import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Row from "../../Template/Page/Row";
import Pod from "../../Elements/pods/Pod_Outer_Wrapper";

import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';


let Rows;
export default class SectionTableForAgainst  extends Component {

    render(){
        console.log(this.props)
     /**
      * 
                            <ROW 
                                   
                                    Team={team.Team} 
                                    Value= {team[this.props.Selected]}
                                    ID={team.ID}
                                    Path='for'
                                    {... this.props}
                                /> 
      */
        Rows = this.props.Data.map((team,i)=>{
            
            if( team[this.props.Selected] !== 0  
                && team.Innings >= this.props.Int
                && isFinite(team[this.props.Selected]))
            {
            
                return( 
                    <div className="ListItem"  key={i} >
                            <div className="TeamName">{team.Team}</div>
                            <div className="Number">{team[this.props.Selected]}</div>
                            <div className="GameCTA">
                                    <IconButton aria-label="Scorecard" component={Link} to={`/${this.props.match.params.playerid}/history/for/${team.ID}`}>
                                            <LaunchIcon />
                                    </IconButton>
                            </div>
                     </div>   
                )
            }
            else{
                return( null)
            }
        }) 
        Rows = Rows.filter(function (el) { return el != null; });

        return(
            <Row class="PodRow TeamList"> 
                <Pod canvas="canvas1">
                     <div className="ListItem Header">
                            <div className="TeamName">{this.props.Type}</div>
                            <div className="Number">{this.props.Label}</div>
                            <div className="GameCTA">Results : {Rows.length}</div>
                     </div>
                     { Rows }
                </Pod>
            </Row>
        )
    }
 }