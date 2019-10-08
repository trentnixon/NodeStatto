import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';

import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";


let Rows;
export default class SectionTableForAgainst  extends Component {

    render(){
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
                                    <IconButton aria-label="Scorecard" component={Link} to={`/history/${this.props.Path}/${team.ID}`}>
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
            <Row className="PodRow TeamList"> 
                <Pod canvas="canvas1" className="flex-100">
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