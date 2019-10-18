import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Row from "../../../../Template/Page/Row";
import Title from "../../../../Elements/type/PageTitle";
import SubTitle from "../../../../Elements/type/PageSubTitle";
import SingleValuePod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";
import ShowMore from "../../../../Elements/Buttons/ShowMore";

import {BowlingMileStones} from "../../../../../actions/UI";


let Milestones, stones=[];
export default class Section_Rankings extends Component {
    componentWillMount() {}
    render() { 
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
   
        Milestones = BowlingMileStones(this.props.DATA); 
        console.log(Milestones);
        stones=[
            { var:Milestones[2],label:"To "+ Milestones[1] + ' Bowling Innings', Current:'Current : ' +Milestones[0] },
            { var:Milestones[5],label:"To "+ Milestones[4] + ' Overs Bowled', Current:'Current : ' + Milestones[3] },
            { var:Milestones[8],label:"To "+ Milestones[7] + ' Runs Conceded', Current:'Current : ' + Milestones[6] },
            { var:Milestones[11],label:"To "+ Milestones[10] + ' Wickets', Current:'Current : ' + Milestones[9] },
            { var:Milestones[14],label:"To "+ Milestones[13] + ' 2 fas', Current:'Current : ' + Milestones[12] },     
        ]
        return (
            <Row className="PodRow">
                <Title Title={this.props.TITLE}/> 
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