import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../../Template/Page/Row";
import Title from "../../../../../Template/Page/Typography/PageTitle";
import SingleValuePod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Header_SingleValue_Footer";
import ShowMore from "../../../../../Venders/MaterialUI/Buttons/ShowMore"

const stones=[
    { var:"ducks",label:"Ducks", path:"batting/scores"},
    { var:"s_10",label:"< 10",   path:"batting/scores"},
    { var:"s_20",label:"20 odd", path:"batting/scores"},
    { var:"s_30",label:"30 odd", path:"batting/scores"},
    { var:"s_40",label:"40 odd", path:"batting/scores"},
    { var:"s_50",label:"50 +",   path:"batting/scores"},
    { var:"s_100",label:"100 +", path:"batting/scores"}
]
export default class Section_Rankings extends Component {
    componentWillMount() { }
    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';

        return ( 
       
            <Row className="PodRow">
                <Title Title={this.props.TITLES.TITLES.ACHIEVEMENTS}/> 
            
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
                                            <SingleValuePod 
                                                label={stone.label}
                                                total={this.props.Data[stone.var]}
                                                icon= {stone.icon}
                                                Footer = {<ShowMore Label={this.props.TITLES.CTA.MORE} className=" CTA ButtonRight" Path={stone.path+"/"+stone.var} />}
                                            />
                                        </Animated> 
                                    )
                                }) 
                            }
                </Row>
            )
        }
    } 