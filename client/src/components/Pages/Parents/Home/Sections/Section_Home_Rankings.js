import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../Template/Page/Row";
import Title from "../../../../Elements/type/PageTitle";

// Icons
//Keeping
import  {Batting,Bowling} from "../../../../Icons/icons"; 
import RankingPod from "../../../../Elements/pods/RankingHomePod";

let stones=[];
export default class Home_Section_Rankings extends Component {
    componentWillMount() {
        //console.log(this.props.DATA)
        //   { var:this.props.PLAYER_DATA.Primary.Keeping, Path:"/keeping/", label:this.props.TITLES.KEEPING,icon:<Keeping/>}
         stones=[
            { var:this.props.DATA.Batting,  Path:"/batting/", label:this.props.SITE.BATTING,icon:<Batting/>},
            { var:this.props.DATA.Bowling, Path:"/bowling/", label:this.props.SITE.BOWLING,icon:<Bowling/>}
        ] 
     } 
    render() { 
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
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
                                          
                                            className={IsVisable + " flex-50"}
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