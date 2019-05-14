import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Pod from "../../Template/Page/Pod";
import Title from "../type/PageTitle";
import SubTitle from "../type/PageSubTitle";

var _ = require('lodash');

let FetchRankings=[{
    Title:"Current",
    value:1
},{
    Title:"Best",
    value:2
},{
    Title:"Worst",
    value:0
}]

export default class RankingPods extends Component {

    componentWillMount() { } 

    findValue(data,type){
            
        if(type === 1){ return(data[data.length-1].rank)}
        else if(type === 2){
            return Math.min.apply(null, _.map(data, "rank"))
        } 
        else if(type === 0){
            return Math.max.apply(null, _.map(data, "rank"));
        }
    }
    render() {
        //console.log(this.props.visable);
       let  IsVisable =  this.props.visable === true ? 'show':'';
        return (
                <div className="RankingPods" >
                    { 
                        FetchRankings.map((rank,i)=>{
                            let Delay= 200*i;
                            return(
                                <Animated  
                                    key={i} 
                                    animationIn="zoomIn"
                                    isVisible={this.props.visable}
                                    animationInDelay={Delay}
                                    animateOnMount={false}
                                    className={IsVisable}
                                >
                                    <Pod col="col-md-12" type="IconPod" canvas="canvas1" >
                                        <SubTitle Title={this.findValue(this.props.Rankings, rank.value)} />
                                        <Title Title={rank.Title} />
                                    </Pod>
                                </Animated>
                                )
                        })
                    }
                </div>
            )
        }
    } 