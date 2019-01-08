import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";

const stones=[
    { var:"fa2",label:"2 fa"},
    { var:"fa3",label:"3 fa"},
    { var:"fa4",label:"4 fa"},
    { var:"fa5",label:"5 fa"}, 
    { var:"fa6",label:"6 fa"},
    { var:"fa7",label:"7 fa"}
]

export default class Section_Rankings extends Component {
    componentWillMount() {}
    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return (
            <div className="Section_Milestones">
             <Row class="ContainerRow">
                    <Pod col="col-md-12" > 
                        <Title Title={this.props.Title}/>
                        <SubTitle Title={this.props.SubTitle} />
                        <Row>
                                {
                                    stones.map((stone,i)=>{
                                            console.log("Pod " + this.props.isVisible)
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
                                                    <Pod col="col-md-12">
                                                        <SubTitle Title={this.props.Data[stone.var]} />
                                                        <Title  Title={stone.label} />
                                                    </Pod>
                                                </Animated>
                                            )
                                        }) 
                                    }
                        </Row>
                    </Pod>
                    </Row>
                </div>
            )
        }
    } 