import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Layers'
import { Link } from "react-router-dom";
import {Animated} from "react-animated-css";

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";

// Pod
import RankingPod from "../../Elements/pods/Ranking_Home_Pod"

let stones=[];
export default class Section_Rankings extends Component {
    componentWillMount() {
         stones=[
            { var:this.props.Data.Batting, Path:"/batting/", label:"Batting"},
            { var:this.props.Data.Bowling, Path:"/bowling/", label:"Bowling"},
            { var:this.props.Data.Keeping, Path:"/keeping/", label:"Keeping"}
        ]
     }
    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return ( 
            <div className="Section Section_Milestones">
                <Row class="ContainerRow">
                    <Pod col="col-md-12" > 
                        <Title Title={this.props.Title}/>
                        <Row>  
                        
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
                                            <RankingPod 
                                                total={stone.var}
                                                label={stone.label}
                                            />
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