import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Row from "../../Template/Page/Row";
import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";
import SingleValuePod from "../../Elements/pods/Pod_SingleValue_Iconheader";
import ShowMore from "../../Elements/Buttons/ShowMore";

const stones=[
    { var:"fa2",label:"2 fa", path:"bowling/fas"},
    { var:"fa3",label:"3 fa", path:"bowling/fas"},
    { var:"fa4",label:"4 fa", path:"bowling/fas"},
    { var:"fa5",label:"5 fa", path:"bowling/fas"}, 
    { var:"fa6",label:"6 fa", path:"bowling/fas"},
    { var:"fa7",label:"7 fa", path:"bowling/fas"} 
]

export default class Section_Rankings extends Component {
    componentWillMount() {}
    render() { 
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        let Path = this.props.match.params.playerid;

        return (
            <Row class="PodRow">
                <Title Title={this.props.Title}/> 
                <SubTitle Title={this.props.SubTitle} />
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
                                    className={IsVisable + " col-md-4"}
                                >
                                    <SingleValuePod 
                                        label={stone.label}
                                        total={this.props.Data[stone.var]}
                                        icon= {stone.icon}
                                        Footer = {<ShowMore Label={this.props.CTA.MORE} class=" CTA ButtonRight" Player={Path} Path={stone.path+"/"+stone.var} />}
                                    />
                                </Animated>
                            )
                        }) 
                    }
            </Row>
            )
        }
    } 