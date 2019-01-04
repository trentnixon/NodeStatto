import React, { Component } from 'react';
import Pod from "../../../Template/Page/Pod";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//import SwipeableViews from 'react-swipeable-views';
//import AppBar from '@material-ui/core/AppBar';
//import Tabs from '@material-ui/core/Tabs';
//import Tab from '@material-ui/core/Tab';


var _ = require('lodash');

let Teams=[];
export default class PlayedFor extends Component {
    componentWillMount() { 
        Teams=[]
       // console.log(this.props.DATA.CLEAN)
       // eslint-disable-next-line
        this.props.DATA.CLEAN.map((game,i)=>{

            let TeamPosition = _.findIndex(Teams, function(o) { return o.team === game.Meta.Team; });
              
            if(TeamPosition === -1){
                Teams.push(
                    {
                        team:game.Meta.Team,
                        Int:1,
                    })
            } else{
                Teams[TeamPosition].Int =  Teams[TeamPosition].Int + 1;
            }
        })
    } 
  render() {

    //console.log(Teams);
    Teams = _.orderBy(Teams, [function(o) { return o.Int; }],['desc']);
    
      return(
            <Pod col={this.props.col}>
                    <h1>{this.props.label}</h1>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Team</TableCell>
                                <TableCell>Games</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                {
                                    Teams.map((Team,i)=>{
                                        return (
                                            <TableRow key={i}>
                                                  <TableCell component="th" scope="row"> {i+1}</TableCell>
                                                  <TableCell component="th" scope="row"> {Team.team}</TableCell>
                                                  <TableCell component="th" scope="row"> {Team.Int}</TableCell>
                                            </TableRow>
                                          )
                                    })
                                }
                        </TableBody>
                    </Table>
                </Pod>
      )
  }
}