import React, { Component } from 'react';
import {Animated} from "react-animated-css";

// import IconButton from '@material-ui/core/IconButton';
// import LinkIcon from '@material-ui/icons/Layers'
// import { Link } from "react-router-dom";


import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";
// import SubTitle from "../../Elements/type/PageSubTitle";

// Icons
import  {Batting,Bowling,Keeping} from "../../Icons/icons";
// Pod
import RankingPod from "../../Elements/pods/Ranking_Home_Pod"

let stones=[];
export default class Section_Rankings extends Component {
    componentWillMount() {
         stones=[
            { var:this.props.Data.Batting, Path:"/batting/", label:"Batting",icon:<Batting/>},
            { var:this.props.Data.Bowling, Path:"/bowling/", label:"Bowling",icon:<Bowling/>},
            { var:this.props.Data.Keeping, Path:"/keeping/", label:"Keeping",icon:<Keeping/>}
        ]
     }
    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return ( 
            <div className="Section Section_Home_RankingPods">
                <Row class="ContainerRow">
                    <Pod col="col-md-12" > 
                        <Title Title={this.props.Title}/>
                        <Row class="HomeRankingPods">  
                        
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
                                                icon={stone.icon}
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