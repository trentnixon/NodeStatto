import React, { Component } from 'react';

/** Table */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ROW from "../../Elements/Tables/ROW_ForandAgainst";

let Rows;
export default class SectionTableForAgainst
 extends Component {
    render(){
    
        Rows = this.props.Data.map((team,i)=>{
            if( team[this.props.Selected] !== 0 && team.Innings >= this.props.Int)
            {
            
                return( 
                    <ROW 
                        key={i} 
                        Team={team.Team} 
                        Value= {team[this.props.Selected]}
                        ID={team.ID}
                        Path='for'
                        {... this.props}
                    />
                )
            }
            else{
                return( null)
            }
        }) 
        Rows = Rows.filter(function (el) { return el != null; });

        return(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right"> </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right" className="results"> Results : {Rows.length}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">{this.props.Type}</TableCell>
                        <TableCell align="right">{this.props.Label}</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { Rows }
                </TableBody>
            </Table>
        )
    }
 }