import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class BattingRecentScores extends Component {

    componentWillMount() { 
        console.log(this.props.Table) 
    }
 
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
                                this.props.Table.map((game,i)=>{
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