import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Pod from "../../Template/Page/Pod";
import SubTitle from "../type/PageSubTitle";

export default class RankingPods extends Component {
    componentWillMount() { } 
    render() {
        
        console.log(this.props.Percentage)

        let FillStyle = {  height: this.props.Percentage+"%" }
        /*
        <Radial 
                        Value={this.props.Value}
                        Label={this.props.Label} 
                        Percentage={this.props.Percentage}
                        Created={this.props.Created}
                    /> */
        return (
                <Pod  col="col-md-4 col-lg-4  col-xl-2 col-12 col-sm-6" >
                    
                    
                    <div className="RadialTextContainer">
                        
                        <SubTitle Title={parseInt(this.props.Value).toFixed(0)} />
                        <SubTitle Title={this.props.Label} />
                        
                        
                        <SubTitle Title={parseInt(this.props.Percentage).toFixed(0)+"% of " +this.props.Title} />
                        
                    </div>
                    <div className="fill canvas1" style={FillStyle}>
                    </div>
                </Pod>
            )
        }
    }