import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../Template/Page/Row";
import Title from "../../Elements/type/PageTitle";

// Icons
import  {Batting,Bowling,Keeping} from "../../Icons/icons"; 
import RankingPod from "../../Elements/pods/RankingHomePod";

let stones=[];
export default class Home_Section_Rankings extends Component {
    componentWillMount() {
         stones=[
            { var:this.props.Data.Batting, Path:"/batting/", label:this.props.TITLES.BATTING,icon:<Batting/>},
            { var:this.props.Data.Bowling, Path:"/bowling/", label:this.props.TITLES.BOWLING,icon:<Bowling/>},
            { var:this.props.Data.Keeping, Path:"/keeping/", label:this.props.TITLES.KEEPING,icon:<Keeping/>}
        ]
     } 
    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return ( 
                <Row class="PodRow"> 
                        <Title Title={this.props.Title}/> 
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
                                            className={IsVisable}
                                        >
                                            <RankingPod 
                                                total={stone.var}
                                                label={stone.label}
                                                icon={stone.icon}
                                                ProNoun={this.props.SUBS.PREVIOUS}
                                            />
                                        </Animated>
                                    )
                                }) 
                            }
                </Row>
            )
        }
    } 