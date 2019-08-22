import React, { Component } from 'react';
import update from 'react-addons-update'
import {Animated} from "react-animated-css";
import Row from "../../../../Template/Page/Row";
// Elements
import SingleValuePod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";

let stats=[
    {
        Name:["Wickets"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        Title:"Expected"
    },
    {
        Name:["Overs Bowled"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        Title:"Expected"
    },
    {
        Name:["Runs Conceeded"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        Title:"Expected"
    },
    {
        Name:["Economy"],
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


      createStats(Data){
            
        this.setState({ Created: Math.round((new Date()).getTime() / 1000)  })

            this.setState({
                stats: update(this.state.stats,
                    {
                     
                        0:{
                            Value:{$set:[Data.wickets]},
                            Total:{$set:[Data.wickets]},
                            Percentage:{$set:[this.findPercentage(Data.wickets,Data.wickets)]},
                            TitleValue:{$set:(this.Divideexpected(this.props.Career.bowling.innings,this.props.Career.bowling.wickets, this.props.Data.innings))  }
                        },
                        1:{
                            Value:{$set:[Data.ob]},
                            Total:{$set:[Data.ob]},
                            Percentage:{$set:[this.findPercentage(Data.ob,Data.ob)]},
                            TitleValue:{$set:(this.Divideexpected(this.props.Career.bowling.innings,this.props.Career.bowling.ob, this.props.Data.innings))  }
                        },
                        2:{
                            Value:{$set:[Data.rc]},
                            Total:{$set:[Data.rc]},
                            Percentage:{$set:[this.findPercentage(Data.rc,Data.rc)]},
                            TitleValue:{$set:(this.Divideexpected(this.props.Career.bowling.innings,this.props.Career.bowling.rc, this.props.Data.innings))  }
                        },
                        3:{
                            Value:{$set:[Data.economy]},
                            Total:{$set:[Data.economy]},
                            Percentage:{$set:[this.findPercentage(Data.economy,Data.economy)]},
                            TitleValue:{$set:this.props.Career.bowling.economy}
                        },
                        4:{
                            Value:{$set:[Data.average]},
                            Total:{$set:[Data.average]},
                            Percentage:{$set:[this.findPercentage(Data.average,Data.average)]},
                            TitleValue:{$set:this.props.Career.bowling.average}
                        },
                        5:{
                            Value:{$set:[Data.sr]},
                            Total:{$set:[Data.sr]},
                            Percentage:{$set:[this.findPercentage(Data.sr,Data.sr)]},
                            TitleValue:{$set:this.props.Career.bowling.sr}
                        },
                        
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
        //console.log(this.props)
        this.createStats(this.props.Data); 
    }

    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return (
            <Row className="PodRow">
                            {
                                this.state.stats.map((radial,i)=>{
                                    //console.log(radial)
                                    let Delay= 200*i;
                                    return(
                                        <Animated  
                                        key={i} 
                                        animationIn="fadeInUp"
                                        isVisible={this.props.isVisible}
                                        animationInDelay={Delay}
                                        animateOnMount={false}
                                        className={IsVisable + " flex-30"}
                                    >
                                            <SingleValuePod 
                                            label={radial.Name}
                                            total={radial.Value}
                                            icon= ""
                                            Footer = ""
                                            />
                                        </Animated>
                                    )
                                })
                            }
            </Row >
            )
        }
    } 

    /** <RadialPod 
                                                key={i}
                                                Value={radial.Value}
                                                Label={radial.Name}
                                                Percentage={radial.Percentage}
                                                Created={this.state.Created}
                                                TitleValue={radial.TitleValue}
                                                Title ={radial.Title}
                                            /> */