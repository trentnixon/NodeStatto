import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../Template/Page/Row";
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";

import  {Runs,Trophy } from "../../../../Icons/icons";
import Looks6Icon from '@material-ui/icons/Looks6';  
//Wickets,Keeping,
//{<ShowMore Label={this.props.CTA.MORE} className=" CTA ButtonRight"  Path={stone.Path} />}
let stones=[];
export default class Home_Overview extends Component { 
    componentWillMount() { 
         //console.log(this.props.DATA.Meta)
         stones=[
            { var:this.props.DATA.Meta.Batting_HS,     Path:"batting/runs", label:this.props.SUBS.HS,icon:<Looks6Icon className="NavigationIcon"/>},
            { var:this.props.DATA.Meta.Bowling_Best,   Path:"bowling/wickets", label:this.props.SUBS.BB,icon:<Runs />}
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
                            className={IsVisable + " flex-50"}
                        >
                            <IconPod 
                                icon={stone.icon}
                                label={stone.label}
                                total={stone.var}
                                Footer = ""
                            />
                        </Animated>
                        )
                    }) 
                    }
                </Row>
            )
        }
    } 