import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ShowMore from  "../Buttons/ShowMore";

let stats=[
    {
        Name:["Innings"],
        Title:"Career Innings"
    },
    {
        Name:["Runs"],
        Title:"Runs"
    },
    {
        Name:["BF"],
        Title:"Balls Faced"
    },
    {
        Name:["NO"],
        Title:"Not Out's"
    },{
        Name:["AVG"],
        Title:"Average"
    },
    {
        Name:["SR"],
        Title:"Strike Rate"
    }
];

export default class ForandAgainstTable extends Component {

    state = {
        labelWidth: 100,
        Year:"Career",
        stats:stats, 
        Created:0,
      }

    componentWillMount() {}
 
      find(data, variable, Startvalue){
          //console.log(data, variable);
            let value = Startvalue;
            let pointer = 0; 

            // eslint-disable-next-line
            data.map((team,int)=>{
                if(team[variable] > value){
                  //console.log(team, team[variable], variable);
                    pointer=int;
                    value = team[variable]
                }
            })

           /console.log(pointer)
        return data[pointer].Team + ' (' + data[pointer][variable] + ')';
      }
      shouldComponentUpdate(nextProps, nextState){ return true;}
      componentWillUpdate(nextProps, nextState){}
    render() {
        
        //console.log(this.props);

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
                                                <TableCell component="th" scope="row">{game.Title}</TableCell>
                                                <TableCell align="right">
                                                    { this.find(this.props.Data.FOR,game.Name[0],0 ) }
                                                </TableCell>
                                                <TableCell align="right">
                                                    { this.find(this.props.Data.AGAINST,game.Name[0],0 ) }
                                                </TableCell>
                                            </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>

                        <div className="Footer">
                                    <ShowMore 
                                        Label="Full List"
                                        class=" CTA ButtonRight"
                                        Player={this.props.match.params.playerid}
                                        Path="batting/foragainst"
                                    />
                        </div>
                </div>
            )
        }
    } 