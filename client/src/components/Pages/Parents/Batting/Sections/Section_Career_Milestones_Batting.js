import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import {BattingMileStones} from "../../../../../actions/UI";

import Row from "../../../../Template/Page/Row";
import Title from "../../../../Elements/type/PageTitle";
//import SubTitle from "../../../../Elements/type/PageSubTitle";

import SingleValuePod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";




let Milestones, stones;
export default class Section_Rankings extends Component {
    componentWillMount() { 

    }
    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        Milestones = BattingMileStones(this.props.Data.CAREER.Career.batting, this.props.Data.CLEAN);
        console.log(Milestones);
        stones=[
            { var:Milestones[2],label:"To "+ Milestones[1] + ' Runs', Current:'Current : ' +Milestones[0] },
            { var:Milestones[5],label:"To "+ Milestones[4] + ' 50s', Current:'Current : ' + Milestones[3] },
            { var:Milestones[8],label:"To "+ Milestones[7] + ' Balls Faced', Current:'Current : ' + Milestones[6] },
            { var:Milestones[11],label:"To "+ Milestones[10] + ' Innings', Current:'Current : ' + Milestones[9] },
            { var:Milestones[14],label:"To "+ Milestones[13] + ' Not Outs', Current:'Current : ' + Milestones[12] },
            { var:Milestones[17],label:"To "+ Milestones[16] + ' Ducks', Current:'Current : ' + Milestones[15] },       
        ]
        return ( 
       
            <Row className="PodRow">
                <Title Title={this.props.TITLES.TITLES.MILESTONE}/> 
            
                    {
                        stones.map((stone,i)=>{
                            //console.log("Pod " + this.props.isVisible)
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
                                            <SingleValuePod 
                                                label={stone.label}
                                                total={stone.var}
                                                icon= {stone.icon}
                                                Footer = {stone.Current}
                                            />
                                        </Animated> 
                                    )
                                }) 
                            }
                </Row>
            )
        }
    } 