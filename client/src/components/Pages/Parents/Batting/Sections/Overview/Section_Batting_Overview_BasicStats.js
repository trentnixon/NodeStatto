import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../../Template/Page/Row";
import IconPod from "../../../../../Elements/pods/Pod_SingleValue_Iconheader";
import Subtitle from "../../../../../Elements/type/PageSubTitle";
import ShowMore from "../../../../../Elements/Buttons/ShowMore"

import  {Runs, Trophy, Bowling, Duck} from "../../../../../Icons/icons"; 
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import Looks6Icon from '@material-ui/icons/Looks6';
import StarsIcon from '@material-ui/icons/Stars';
import WhatshotIcon from '@material-ui/icons/Whatshot';

//Wickets,Keeping,Trophy 
let stones=[];
export default class Home_Overview extends Component {
    componentWillMount() { 
        //console.log(this.props.DATA, this.props.DATA.CAREER.Career.batting.ballsFaced)
         stones=[
            { var:this.props.DATA.CAREER.Career.batting.innings,     Path:"batting/overview", label:this.props.SUBS.INNINGS,icon:<Trophy/>},
            { var:this.props.DATA.Meta.Batting_Runs,                    Path:"batting/runs", label:this.props.SUBS.RUNS,icon:<Runs/>},
            { var:this.props.DATA.Meta.Batting_Average,                 Path:"batting/averages", label:this.props.SUBS.AVG, icon:<GraphicEqIcon/>},
            { var:this.props.DATA.Meta.Batting_SR,                      Path:"batting/runs", label:this.props.SUBS.SR,icon:<WhatshotIcon />},
            { var:this.props.DATA.Meta.Batting_HS,                      Path:"batting/scores", label:this.props.SUBS.HS,icon:<Looks6Icon/>},
            { var:this.props.DATA.CAREER.Career.batting.ballsFaced,     Path:"batting/by-the-ball", label:this.props.SUBS.BF,icon:<Bowling/>},
            { var:this.props.DATA.CAREER.Career.batting.s_50,     Path:"batting/scores", label:this.props.SUBS.FIFTY,icon:<StarsIcon />},
            { var:this.props.DATA.CAREER.Career.batting.ducks,     Path:"batting/scores", label:this.props.SUBS.DUCKS,icon:<Duck/>},
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
                            animateOnMount={true}
                            className={IsVisable + " flex-25 flex-m-50"}
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