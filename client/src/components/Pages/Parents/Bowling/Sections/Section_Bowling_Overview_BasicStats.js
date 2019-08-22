import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../Template/Page/Row";
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";

import ShowMore from "../../../../Elements/Buttons/ShowMore"
import  {Runs} from "../../../../Icons/icons"; 
//Wickets,Keeping,Trophy 
let stones=[];
export default class Home_Overview extends Component {
    componentWillMount() { 
        console.log(this.props.DATA)
       
         stones=[
            { var:this.props.DATA.Meta.Bowling_Wickets,                    Path:"bowling/overview", label:this.props.SUBS.WICKETS,icon:<Runs/>},
            { var:this.props.DATA.Meta.Bowling_Overs,                      Path:"bowling/overview", label:this.props.SUBS.OVERS,icon:<Runs/>},
            { var:this.props.DATA.Meta.Bowling_Economy,                 Path:"bowling/overview", label:this.props.SUBS.ECO, icon:<Runs/>},
            { var:this.props.DATA.Meta.Bowling_Average,                      Path:"bowling/overview", label:this.props.SUBS.AVG,icon:<Runs/>},
            { var:this.props.DATA.Meta.Bowling_Ranking_Country_Current, Path:"bowling/overview", label:this.props.SUBS.CR,icon:<Runs/>},
            { var:this.props.DATA.Meta.Bowling_Ranking_World_Current,   Path:"bowling/overview", label:this.props.SUBS.WR,icon:<Runs/>},
            { var:this.props.DATA.Meta.Bowling_Best,   Path:"bowling/overview", label:this.props.SUBS.BB,icon:<Runs/>},
        ]
     } 
    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return (
                <Row className="PodRow">
                   { 
                    stones.map((stone,i)=>{
                        let Delay= 200*i;
                    return(  
                        <Animated   
                            key={i} 
                            animationIn="fadeInUp"
                            isVisible={this.props.isVisible}
                            animationInDelay={Delay}
                            animateOnMount={false}
                            className={IsVisable + " flex-25"}
                        >
                            <IconPod 
                                className="flex-100"
                                icon={stone.icon}
                                label={stone.label}
                                total={stone.var}
                                Footer = {<ShowMore Label={this.props.CTA.MORE} className=" CTA ButtonRight"  Path={stone.Path} />}
                            />
                        </Animated>
                        )
                    }) 
                    }
                </Row>
       
            )
        }
    } 