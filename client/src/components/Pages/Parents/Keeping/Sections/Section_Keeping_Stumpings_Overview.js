import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Subtitle from "../../../../Elements/type/PageSubTitle";
import Row from "../../../../Template/Page/Row";
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";
import  {Keeping} from "../../../../Icons/icons"; 


//Wickets,Keeping,Trophy 
let stones=[],SR=0;
export default class Home_Overview extends Component {
    componentWillMount() { 
        console.log(this.props.DATA);
        SR = (this.props.DATA.CAREER.Career.Keeping.innings/this.props.DATA.CAREER.Career.Keeping.stumping )
        stones=[
            { var:this.props.DATA.CAREER.Career.Keeping.stumping, label:"Stumpings",footer:"over Career", icon:<Keeping/>},
            { var:this.props.DATA.CAREER.Career.Keeping.innings, label:"Innings",footer:"as Keeper", icon:<Keeping/>}, 
            { var:SR.toFixed(2), label:"Strike Rate",footer:"Games per Stumping",icon:<Keeping/>}   
        ]
     } 

    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return (
                <Row className="PodRow">
                 <Subtitle Title={this.props.SUBS.BASIC}/>
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
                            className={IsVisable + " flex-30"}
                        >
                            <IconPod 
                                className="flex-100"
                                icon={stone.icon}
                                label={stone.label}
                                total={stone.var}
                                Footer = {stone.footer}
                            />
                        </Animated>
                        )
                    }) 
                    }
                </Row>
       
            )
        }
    } 