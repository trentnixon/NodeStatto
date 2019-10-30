import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Subtitle from "../../../../Elements/type/PageSubTitle";
import Row from "../../../../Template/Page/Row";
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";

import ShowMore from "../../../../Elements/Buttons/ShowMore"
import  {Wickets, Bowling} from "../../../../Icons/icons"; 
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import Looks6Icon from '@material-ui/icons/Looks6';
import StarsIcon from '@material-ui/icons/Stars';
import WhatshotIcon from '@material-ui/icons/Whatshot';

//Wickets,Keeping,Trophy 
let stones=[], BSR=0;
export default class Home_Overview extends Component {
    componentWillMount() { 
         BSR = (this.props.DATA.Meta.Bowling_Overs * 5) / this.props.DATA.Meta.Bowling_Wickets; 
         stones=[
            { var:this.props.DATA.Meta.Bowling_Best,        Path:"bowling/overview", label:this.props.SUBS.BB,          icon:<StarsIcon/>},
            { var:this.props.DATA.Meta.Bowling_Wickets,     Path:"bowling/overview", label:this.props.SUBS.WICKETS,     icon:<Wickets/>},
            { var:this.props.DATA.Meta.Bowling_Overs,       Path:"bowling/overview", label:this.props.SUBS.OVERS,       icon:<Bowling/>},
            { var:this.props.DATA.Meta.Bowling_Economy,     Path:"bowling/overview", label:this.props.SUBS.ECO,         icon:<Looks6Icon/>},
            { var:this.props.DATA.Meta.Bowling_Average,     Path:"bowling/overview", label:this.props.SUBS.AVG,         icon:<GraphicEqIcon/>},
            { var:(BSR).toFixed(2),                         Path:"bowling/overview", label:this.props.SUBS.SR,         icon:<WhatshotIcon/>}
        ]
     } 

    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return (
                <Row className="PodRow">
                    <Subtitle Title={this.props.SUBS.BASIC}/>
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
                                    className={IsVisable + " flex-30 flex-m-50"}
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