import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import PodHeaderBody from "../../Elements/pods/Pod_Header_Body";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ShowMore from "../../Elements/Buttons/ShowMore";

var _ = require('lodash');

let Teams=[], Num=0, CTA=null;
export default class PlayedFor extends Component {
    componentWillMount() { 
        Teams=[]
       //console.log(this.props.DATA.CLEAN)
       // eslint-disable-next-line
        this.props.DATA.map((game,i)=>{

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
        Num = Teams.length;
    } 
  render() {

    Teams = _.orderBy(Teams, [function(o) { return o.Int; }],['desc']);
    
    if(this.props.num !== null){
        Teams= Teams.slice(0,this.props.num); 
        CTA = <ShowMore 
                    Label={this.props.CTA.ALL}
                    class=" CTA ButtonRight"
                    Path="playedFor/"
                />
    }
    
    
      return(

            <PodHeaderBody
                icon={<Avatar className="Avatar" >{Num}</Avatar>}
                label={this.props.TITLES.TEAMS}
                Footer={CTA}
                ClassName={this.props.ClassName}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>{this.props.TITLES.TEAMS}</TableCell>
                            <TableCell>{this.props.TITLES.GAMES}</TableCell>
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
            </PodHeaderBody>
      )
  }
}