import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
/*
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
*/

import ShowMore from  "../Buttons/ShowMore";

let stats=[
    {
        Name:["Wickets"],
        Title:"Career Wickets",
        eq:">",
        sv:"0"
    },
    {
        Name:["Overs"],
        Title:"Career Overs",
        eq:">",
        sv:"0"
    },
    {
        Name:["RunsConceded"],
        Title:"Runs Conceded",
        eq:">",
        sv:"0"
    },
    
    {
        Name:["ECO"], 
        Title:"Economy",
        eq:"<",
        sv:"99"
    },{
        Name:["BOWLAVG"],
        Title:"Average",
        eq:"<",
        sv:"99"
    },
    {
        Name:["BOWLSR"],
        Title:"Strike Rate",
        eq:"<",
        sv:"99"
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
 
      find(data, variable, Startvalue,eq){
            let value = Startvalue;
            let pointer = 0; 

            // eslint-disable-next-line
            data.map((team,int)=>{
                if(eq === "<"){
                    if(team[variable] < value && isFinite(team[variable]) ){
                        pointer=int;
                        value = team[variable]
                    }
                }
                else if(eq=== ">"){
                    if(team[variable] > value && isFinite(team[variable]) ){
                        pointer=int;
                        value = team[variable]
                    }
                }
            })

        return data[pointer].Team + ' (' + data[pointer][variable] + ')';
      }
      shouldComponentUpdate(nextProps, nextState){ return true;}
      componentWillUpdate(nextProps, nextState){}
    render() {
        //console.log(this.props.Data.FOR);
        return (
                <Row className="Table canvas1">  
                    <div className="tr">
                        <div className="th"></div>
                        <div className="th">{this.props.LABELS.SITE.SUBS.FOR}</div>
                        <div className="th">{this.props.LABELS.SITE.SUBS.AGAINST}</div>
                    </div>
                    {
                                // eslint-disable-next-line
                                this.state.stats.map((game,i)=>{
                                    return(
                                            <div className="tr" key={i}>
                                                <div className="td">{game.Title}</div>
                                                <div className="td">
                                                    { this.find(this.props.Data.FOR,game.Name[0],game.sv,game.eq ) }
                                                </div>
                                                <div className="td">
                                                    { this.find(this.props.Data.AGAINST,game.Name[0],game.sv,game.eq ) }
                                                </div>
                                            </div>
                                    )
                                })
                            }
                        <div className="Footer">
                                    <ShowMore 
                                        Label={this.props.LABELS.SITE.CTA.FULL}
                                        className=" CTA ButtonRight"
                                        Player={this.props.match.params.playerid}
                                        Path="batting/foragainst"
                                    />
                        </div>
                </Row>
            )
        }
    } 