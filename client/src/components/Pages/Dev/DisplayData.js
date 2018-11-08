import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default class Login extends Component {
  componentWillMount() { } 
  render() {
    return (
     <div>
         <Table >
        <TableHead>
          <TableRow>
          <TableCell>#</TableCell>
            <TableCell>Fixture</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Oppo</TableCell>
            <TableCell>Runs</TableCell>
            <TableCell>BF</TableCell>
            <TableCell>Fig</TableCell>
            <TableCell>OB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.props.DATA.CLEAN.map((row,i)=>{
             let Fig=0, OB=0,R=0,BF=0;

             if(row.Bowling){
               Fig=row.Bowling.Figures;
               OB=row.Bowling.Overs
             }
             if(row.Batting){
                R=row.Batting.RunsValue
                BF=row.Batting.BallsFaced
             }
             /** */
              return (
                <TableRow key={i}>
                      <TableCell component="th" scope="row"> {i}</TableCell>
                      <TableCell component="th" scope="row"> {row.Meta.Fixture}</TableCell>
                      <TableCell component="th" scope="row"> {row.Meta.Team}</TableCell>
                      <TableCell component="th" scope="row"> {row.Meta.Opposition}</TableCell>
                      <TableCell component="th" scope="row"> {R}</TableCell>
                      <TableCell component="th" scope="row"> {BF}</TableCell>
                      <TableCell component="th" scope="row"> {Fig}</TableCell>
                      <TableCell component="th" scope="row"> {OB}</TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
     </div>
    )
  }
} 