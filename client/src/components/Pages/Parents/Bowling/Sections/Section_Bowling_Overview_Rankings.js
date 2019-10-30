import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../Template/Page/Row";
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";

import ShowMore from "../../../../Elements/Buttons/ShowMore"
import PublicIcon from '@material-ui/icons/Public';
import LocationCityIcon from '@material-ui/icons/LocationCity';

//Wickets,Keeping,Trophy 
let stones=[];
export default class Home_Overview extends Component {
    componentWillMount() { 
         stones=[
                    { var:this.props.DATA.Meta.Bowling_Ranking_Country_Current, Path:"/rankings", label:this.props.SUBS.CR,icon:<PublicIcon />},
                    { var:this.props.DATA.Meta.Bowling_Ranking_World_Current,   Path:"/rankings", label:this.props.SUBS.WR,icon:<LocationCityIcon />},
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
                            className={IsVisable + " flex-50 flex-m-50"}
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