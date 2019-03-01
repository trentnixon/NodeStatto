import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


let stats=[
    {
        Name:["Innings"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"],
        Title:"Career Innings"
    },
    {
        Name:["Runs"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"],
        Title:"Career Runs"
    },
    {
        Name:["Balls Faced"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"],
        Title:"Career Balls Faced"
    },
    {
        Name:["Not Out's"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"],
        Title:"Career Not Out's"
    },
    {
        Name:["Average"],
        Value:[0], 
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"],
        Title:"Career Average"
    },
    {
        Name:["Strike Rate"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"], 
        Against:["Name"],
        Name:["Strike Rate"],
        Title:"Career Innings"
    }
];


export default class BattingRecentScores extends Component {

    state = {
        labelWidth: 100,
        Year:"Career",
        stats:stats, 
        Created:0,
      }

    componentWillMount() {}
 
    render() {
        return (
                <div className="Table " id="RecentScores" >
                   <Table >
                        <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">For</TableCell>
                            <TableCell align="right">Against</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                // eslint-disable-next-line
                                this.state.stats.map((game,i)=>{
                                    return(
                                            <TableRow key={i}>
                                                <TableCell component="th" scope="row">{game.Name[0]}</TableCell>
                                                <TableCell align="right">{game.For[0]}</TableCell>
                                                <TableCell align="right">{game.Against[0]}</TableCell>
                                            </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            )
        }
    }