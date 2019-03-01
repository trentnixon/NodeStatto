import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";

import ShowMore from "../../Elements/Buttons/ShowMore";
import  {Runs,Wickets,Keeping} from "../../Icons/icons"; 

let stones=[];
export default class Section_Rankings extends Component {
    componentWillMount() {
         stones=[
            { var:this.props.DATA.CAREER.Career.batting.runs, Path:"batting/", label:"Runs",icon:<Runs/>},
            { var:this.props.DATA.CAREER.Career.bowling.wickets, Path:"bowling/", label:"Wickets",icon:<Wickets/>},
            { var:this.props.DATA.CAREER.Career.Keeping.catches, Path:"keeping/", label:"Catches",icon:<Keeping/>}
        ]
     }
    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        let Path = this.props.match.params.playerid;
     
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
                                            <Pod col="col-md-12" canvas="canvas1">
                                            <div className="Header">
                                                {stone.icon}
                                            </div>

                                            <div className="Body">
                                                <SubTitle Title={stone.var} />
                                                <Title  Title={stone.label} />
                                            </div>
                                           
                                           
                                            <div className="Footer">
                                                <ShowMore
                                                    Label="More"
                                                    class=" CTA ButtonRight"
                                                    Player={Path}
                                                    Path={stone.Path}
                                                />
                                                
                                            </div>
                                              
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