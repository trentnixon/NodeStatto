import React, { Component } from 'react';
import Row from "../../Row";
import ShowMore from  "../../../../Venders/MaterialUI/Buttons/ShowMore";
import Subtitle from "../../Typography/PageSubTitle";
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

        return data[pointer].Team + ' (' + data[pointer][variable] + ')';
      }
      shouldComponentUpdate(nextProps, nextState){ return true;}
      componentWillUpdate(nextProps, nextState){}
    render() {
         console.log(this.props.Data.FORAGAINST.For);
        return (
                <Row className="Table"> 
                   <Subtitle Title="For &amp; Against Overview"/> 
                
                    <div className="tr">
                        <div className="th"></div>
                        <div className="th">{this.props.TITLES.SUBS.FOR}</div>
                        <div className="th">{this.props.TITLES.SUBS.AGAINST}</div>
                    </div>
                    {
                                // eslint-disable-next-line
                                this.state.stats.map((game,i)=>{
                                    return(
                                            <div className="tr" key={i}>
                                                <div className="td">{game.Title}</div>
                                                <div className="td">
                                                    { this.find(this.props.Data.FORAGAINST.For,game.Name[0],0 ) }
                                                </div>
                                                <div className="td">
                                                    { this.find(this.props.Data.FORAGAINST.Against,game.Name[0],0 ) }
                                                </div>
                                            </div>
                                    )
                                })
                            }
                        <div className="Footer">
                                    <ShowMore 
                                        Label={this.props.TITLES.CTA.FULL}
                                        className=" CTA ButtonRight"
                                        Path="batting/foragainst"
                                    />
                        </div>
                </Row>
            )
        }
    } 