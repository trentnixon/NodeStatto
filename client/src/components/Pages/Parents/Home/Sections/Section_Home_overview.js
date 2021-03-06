import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../Template/Page/Row";
import IconPod from "../../../../Template/Page/Structure/Pods/PodType/Pod_Header_SingleValue_Footer";

import ShowMore from "../../../../Venders/MaterialUI/Buttons/ShowMore"
import  {Runs,Wickets,Keeping,Trophy } from "../../../../Template/Utilities/Icons/icons"; 

let stones=[];
export default class Home_Overview extends Component {
    componentWillMount() { 
        console.log(this.props.DATA.CAREER);
        
         stones=[
            { var:this.props.DATA.Meta.Matches,                  Path:"history", label:this.props.TITLES.GAMES,icon:<Trophy/>},
            { var:this.props.DATA.CAREER.Batting.runs,    Path:"batting/overview", label:this.props.SUBS.RUNS,icon:<Runs/>},
            { var:this.props.DATA.CAREER.Bowling.wickets, Path:"bowling/overview", label:this.props.SUBS.WICKETS,icon:<Wickets/>},
            { var:this.props.DATA.CAREER.Keeping.catches, Path:"keeping/overview", label:this.props.SUBS.CATCHES,icon:<Keeping/>}
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
                         
                            className={IsVisable + " flex-25 flex-m-50"}
                        >
                            <IconPod 
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