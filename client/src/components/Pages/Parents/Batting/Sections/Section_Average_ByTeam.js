import React, { Component } from 'react';

// Template
import ChartContainer from "../../../../Template/Page/ChartContainer";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

var _ = require('lodash');

// Variables
let Round1=[], Against=null, For=null;
// Start Class 
export default class Section_Default extends Component {

    createAgainst(Data,Int){
       Round1=[];
        Data.map((team,i)=>{
            if(team.Innings > Int){ Round1.push(team) }
        })

        Round1 = _.orderBy(Round1, [function(o) { return o.AVG; }],['desc']);
        return Round1;
    }
   componentWillMount() { 
            Against= this.createAgainst(this.props.PLAYER_DATA.Primary.AGAINST, 5)
            For= this.createAgainst(this.props.PLAYER_DATA.Primary.FOR, 5)
    } 

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}

    render() {
        return ( 

                <ChartContainer
                    Info={this.props.TITLE.DESC.TODO}
                    Interactive={false}
                    Title="Career Best Averages :  (min 5 Inn)"
                    flex=" flex-100"
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={4}>{this.props.TITLE.SUBS.FOR}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Inn</TableCell>
                                <TableCell>Team</TableCell>
                                <TableCell>Average</TableCell>
                                <TableCell>Runs</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                {
                                    For.map((Team,i)=>{
                                                return(
                        
                                                    <TableRow key={i}>
                                                            <TableCell component="th" scope="row">{Team.Innings}</TableCell>
                                                            <TableCell component="th" scope="row"> {Team.Team}</TableCell>
                                                            <TableCell component="th" scope="row"> {Team.AVG} </TableCell>
                                                            <TableCell component="th" scope="row"> {Team.Runs} </TableCell>
                                                    </TableRow>
                                                )
                                        })
                                    }
                        </TableBody>
                    </Table>
                    <Table>
                        <TableHead>

                            <TableRow>
                                <TableCell colSpan={4}>{this.props.TITLE.SUBS.AGAINST}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Inn</TableCell>
                                <TableCell>Team</TableCell>
                                <TableCell>Average</TableCell>
                                <TableCell>Runs</TableCell>
                            </TableRow>
                        </TableHead> 
                        <TableBody>
                            {
                                Against.map((Team,i)=>{
                                        return(
                
                                            <TableRow key={i}>
                                                    <TableCell component="th" scope="row">{Team.Innings}</TableCell>
                                                    <TableCell component="th" scope="row"> {Team.Team}</TableCell>
                                                    <TableCell component="th" scope="row"> {Team.AVG} </TableCell>
                                                    <TableCell component="th" scope="row"> {Team.Runs} </TableCell>
                                            </TableRow>
                                        )
                                })
                            }
                        </TableBody>
                    </Table>
                </ChartContainer>
           
        ) 
    }
}

/**
 *  
 *  
 */