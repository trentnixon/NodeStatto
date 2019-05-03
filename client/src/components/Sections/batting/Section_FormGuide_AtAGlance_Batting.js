import React, { Component } from 'react';
import update from 'react-addons-update'

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";

// Elelemnts
import RadialPod from "../../Elements/pods/FillPods";


var _ = require('lodash');

let stats=[
    {
        Name:["Innings"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        Title:"Expected"
    },
    {
        Name:["Runs"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        Title:"Expected"
    },
    {
        Name:["Balls Faced"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        Title:"Expected"
    },
    {
        Name:["Not Out's"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        Title:"Expected"
    },
    {
        Name:["Average"],
        Value:[0], 
        Total:[0],
        Percentage:[0],
        Title:"Expected"
    },
    {
        Name:["Strike Rate"],
        Value:[0],
        Total:[0],  
        Percentage:[0],
        Title:"Expected"
    }
];


export default class Section_Rankings extends Component {

    state = {
        stats:stats,
        Created:0,
      }


     createStats(Data,Year){
            
            this.setState({ 
                    Created: Math.round((new Date()).getTime() / 1000),
                })
           // console.log(this.props.Data.innings, this.props.Career)
            
            this.setState({
                    stats: update(this.state.stats,
                        {
                            0:{
                                Value:{$set:[Data.innings]},
                                Total:{$set:[Data.innings]},
                                Percentage:{$set:[this.findPercentage(Data.innings,Data.innings)]},
                                TitleValue:{$set:this.Divideexpected(this.props.Career.Meta.Games.int,this.props.Career.batting.innings,this.props.Data.innings)}
                            },
                            1:{
                                Value:{$set:[Data.runs]},
                                Total:{$set:[Data.runs]},
                                Percentage:{$set:[this.findPercentage(Data.runs,Data.runs)]},
                                TitleValue:{$set: this.Multiplyexpected(this.props.Career.batting.average,this.props.Data.innings)}
                            },
                            2:{
                                Value:{$set:[Data.ballsFaced]},
                                Total:{$set:[Data.ballsFaced]},
                                Percentage:{$set:[this.findPercentage(Data.ballsFaced,Data.ballsFaced)]},
                                TitleValue:{$set:this.Divideexpected(this.props.Career.Meta.Games.int,this.props.Career.batting.ballsFaced,this.props.Data.innings)} 
                            },
                            3:{
                                Value:{$set:[Data.notOut]},
                                Total:{$set:[Data.notOut]},
                                Percentage:{$set:[this.findPercentage(Data.notOut,Data.notOut)]},
                                TitleValue:{$set:this.Divideexpected(this.props.Career.Meta.Games.int,this.props.Career.batting.notOut,this.props.Data.innings)}
                            },
                            4:{
                                Value:{$set:[Data.average]},
                                Total:{$set:[Data.average]},
                                Percentage:{$set:[this.findPercentage(Data.average,Data.average)]},
                                TitleValue:{$set:this.props.Career.batting.average}
                            },
                            5:{
                                Value:{$set:[Data.strikeRate]},
                                Total:{$set:[Data.strikeRate]},
                                Percentage:{$set:[this.findPercentage(Data.strikeRate,Data.strikeRate)]},
                                TitleValue:{$set:this.props.Career.batting.strikeRate}
                            }
                        }
                    ),
                  })
     }  

     // Functions
    findPercentage(int,total){ 
        let Perc = (int/total)*100;
        if(Perc  > 100){ Perc = 100}
        return Perc;
    }
    Divideexpected(int,value,played){
        return ((value/int)*played).toFixed(2);
    }
    Multiplyexpected(value,played){
        return (value*played).toFixed(2);
    }
    componentWillMount() {  
        console.log(this.props.Data);
        this.createStats(this.props.Data,"Career"); 
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    render() {
        return (
            <div className="atAGlance">
                <Pod col="col-md-12 NakedPod" >
                        <Row class="Radial" > 
                            {
                                this.state.stats.map((radial,i)=>{
                                    return(
                                       
                                        <RadialPod 
                                            key={i} 
                                            Value={radial.Value}
                                            Label={radial.Name}
                                            Percentage={radial.Percentage}
                                            Created={this.state.Created}
                                            TitleValue={radial.TitleValue}
                                            Title={radial.Title} 
                                        />
                                    )
                                })
                            }
                        </Row > 
                    </Pod>
            </div>
            )
        }
    } 