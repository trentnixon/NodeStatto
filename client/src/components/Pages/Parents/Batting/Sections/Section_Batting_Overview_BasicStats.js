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
            { var:this.props.DATA.Meta.Batting_Runs,                    Path:"batting/overview", label:this.props.SUBS.RUNS,icon:<Runs/>},
            { var:this.props.DATA.Meta.Batting_HS,                      Path:"batting/overview", label:this.props.SUBS.HS,icon:<Runs/>},
            { var:this.props.DATA.Meta.Batting_Average,                 Path:"batting/overview", label:this.props.SUBS.AVG, icon:<Runs/>},
            { var:this.props.DATA.Meta.Batting_SR,                      Path:"batting/overview", label:this.props.SUBS.SR,icon:<Runs/>},
            { var:this.props.DATA.Meta.Batting_Ranking_Country_Current, Path:"batting/overview", label:this.props.SUBS.CR,icon:<Runs/>},
            { var:this.props.DATA.Meta.Batting_Ranking_World_Current,   Path:"batting/overview", label:this.props.SUBS.WR,icon:<Runs/>},
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
                            animateOnMount={true}
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