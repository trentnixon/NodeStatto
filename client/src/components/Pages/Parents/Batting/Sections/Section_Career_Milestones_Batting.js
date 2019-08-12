import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../Template/Page/Row";
import Title from "../../../../Elements/type/PageTitle";
//import SubTitle from "../../../../Elements/type/PageSubTitle";
import SingleValuePod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";
import ShowMore from "../../../../Elements/Buttons/ShowMore";

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
       
            <Row class="PodRow">
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
                                            className={IsVisable}
                                        >
                                            <SingleValuePod 
                                                label={stone.label}
                                                total={this.props.Data[stone.var]}
                                                icon= {stone.icon}
                                                Footer = {<ShowMore Label={this.props.TITLES.CTA.MORE} class=" CTA ButtonRight" Path={stone.path+"/"+stone.var} />}
                                            />
                                        </Animated> 
                                    )
                                }) 
                            }
                </Row>
            )
        }
    } 