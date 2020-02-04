import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../../Template/Page/Row";
import IconPod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Header_SingleValue_Footer";

import  {Runs, Trophy, Bowling, Duck} from "../../../../../Template/Utilities/Icons/icons"; 
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import Looks6Icon from '@material-ui/icons/Looks6';
import StarsIcon from '@material-ui/icons/Stars';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AcUnitIcon from '@material-ui/icons/AcUnit';
// Actions 
import { BattingBasics } from "../../../../../../actions/UI/UI";

let stones=[];
export default class DEEP_Overview extends Component {
    
    componentWillMount() { 
        
       let LABELS = this.props.TITLES.SITE;
       let FetchStats = BattingBasics(this.props.Data);
    
        
        stones=[
            { var:FetchStats[0],  label:LABELS.TITLES.GAMES,icon:<Trophy/>},
            { var:FetchStats[4], label:LABELS.SUBS.RUNS,icon:<Runs/>},
            { var:FetchStats[5],  label:LABELS.SUBS.HS,icon:<Looks6Icon/>},
            
            { var:FetchStats[8], label:LABELS.SUBS.AVG, icon:<GraphicEqIcon/>},
            { var:FetchStats[10],  label:LABELS.SUBS.BF,icon:<Bowling/>},
            { var:FetchStats[12],  label:LABELS.SUBS.SR,icon:<WhatshotIcon/>},
            
            { var:FetchStats[13],  label:LABELS.SUBS.FIFTY,icon:<StarsIcon/>},
            { var:FetchStats[14],  label:LABELS.SUBS.DUCKS,icon:<Duck />},
            { var:FetchStats[15],  label:LABELS.SUBS.NO,icon:<AcUnitIcon/>},
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
                         
                            className={IsVisable + " flex-30"}
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