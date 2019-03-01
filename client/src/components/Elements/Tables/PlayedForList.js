import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";
import ShowMore from "../../Elements/Buttons/ShowMore";

var _ = require('lodash');

let Teams=[], Num=0, CTA=null;
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
        Num = Teams.length;
    } 
  render() {

    Teams = _.orderBy(Teams, [function(o) { return o.Int; }],['desc']);
    if(this.props.num !== null){
        Teams= Teams.slice(0,this.props.num); 
        CTA = <ShowMore 
                    Label="See All"
                    class=" CTA ButtonRight"
                    Player={this.props.match.params.playerid}
                    Path="playedFor/"
                />
    }
   
    
      return(
            <div className="ChartContainer">
                <div className="Header">
                        <Avatar className="Avatar" >{Num}</Avatar>
                        <SubTitle Title={"Teams"} />
                </div>
                <div className="Body">
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
                </div>
                <div className="Footer">
                    {CTA}
                </div>
            </div>
      )
  }
}