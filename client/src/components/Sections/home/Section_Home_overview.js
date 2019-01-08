import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/ChevronRight'
import { Link } from "react-router-dom";
import {Animated} from "react-animated-css";

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";

let stones=[];
export default class Section_Rankings extends Component {
    componentWillMount() {
         stones=[
            { var:this.props.DATA.CAREER.Career.batting.runs, Path:"/batting/", label:"Runs"},
            { var:this.props.DATA.CAREER.Career.bowling.wickets, Path:"/bowling/", label:"Wickets"},
            { var:this.props.DATA.CAREER.Career.Keeping.catches, Path:"/keeping/", label:"Catches"}
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
                                            <Pod col="col-md-12">
                                                <Row>
                                                    <div className="col-md-10">
                                                        <SubTitle Title={stone.var} />
                                                        <Title  Title={stone.label} />
                                                    </div>
                                                    <div className="col-md-2">
                                                    <Link to={`/${Path}${stone.Path}`}>
                                                        <IconButton className="Pod_More" aria-label="Delete">
                                                            <LinkIcon />
                                                        </IconButton>
                                                    </Link>
                                                    </div>
                                                </Row>
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