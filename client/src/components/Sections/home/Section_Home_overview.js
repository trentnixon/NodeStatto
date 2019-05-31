import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../Template/Page/Row";
import IconPod from "../../Elements/pods/Pod_SingleValue_Iconheader";

import ShowMore from "../../Elements/Buttons/ShowMore";
import  {Runs,Wickets,Keeping} from "../../Icons/icons"; 
 
let stones=[];
export default class Home_Overview extends Component {
    componentWillMount() { 
        //console.log(this.props)
         stones=[
            { var:this.props.DATA.CAREER.Career.batting.runs, Path:"batting/", label:this.props.SUBS.RUNS,icon:<Runs/>},
            { var:this.props.DATA.CAREER.Career.bowling.wickets, Path:"bowling/", label:this.props.SUBS.WICKETS,icon:<Wickets/>},
            { var:this.props.DATA.CAREER.Career.Keeping.catches, Path:"keeping/", label:this.props.SUBS.CATCHES,icon:<Keeping/>}
        ]
     }
    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        let Path = this.props.match.params.playerid;
     
        return (
                <Row class="PodRow">
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
                            className={IsVisable}
                        >
                            <IconPod 
                                icon={stone.icon}
                                label={stone.label}
                                total={stone.var}
                                Footer = {<ShowMore Label={this.props.CTA.MORE} class=" CTA ButtonRight" Player={Path} Path={stone.Path} />}
                            />
                        </Animated>
                        )
                    }) 
                    }
                </Row>
       
            )
        }
    } 