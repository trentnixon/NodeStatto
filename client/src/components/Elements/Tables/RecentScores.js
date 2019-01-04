import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class BattingRecentScores extends Component {

    componentWillMount() { 
        //console.log(this.props.Data)
    }

  
    render() {
        return (
                <div className="Table " id="RecentScores" >
                   <Table >
                        <TableHead>
                        <TableRow>
                            <TableCell>For</TableCell>
                            <TableCell align="right">Against</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">Runs</TableCell>
                            <TableCell align="right">Balls</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                // eslint-disable-next-line
                                this.props.Data.map((game,i)=>{
                               
                                    if(game.Batting){
                                        return(
                                            <TableRow key={i}>
                                                <TableCell component="th" scope="row">{game.Meta.Team}</TableCell>
                                                <TableCell align="right">{game.Meta.Opposition}</TableCell>
                                                <TableCell align="right"><small>{game.Meta.Date}</small></TableCell>
                                                <TableCell align="right">{game.Batting.RunsValue}</TableCell>
                                                <TableCell align="right">{game.Batting.BallsFaced}</TableCell>
                                            </TableRow>
                                        )
                                    }
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            )
        }
    }