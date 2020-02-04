import React, { Component } from 'react';

import Pod from "../PodStructure/Pod_Outer_Wrapper";
import PodHeader from "../PodStructure/Pod_Header";
import PodBody from "../PodStructure/Pod_Body";

export default class FillPods extends Component {
    componentWillMount() { } 
    render() {
    
        let FillStyle = {  height: this.props.Percentage+"%" }

        return (
                <Pod  className={this.props.className} type="FillPod" canvas="canvas1" >
                    <PodHeader icon="" label ={this.props.Label} />
                    <PodBody>
                        <h2>{parseInt(this.props.Value, 10).toFixed(0)}</h2>  
                        <h3>{parseInt(this.props.Percentage,10).toFixed(0)+"% of " +this.props.Title}</h3>
                    </PodBody>
                    <div className="fill" style={FillStyle}></div>  
                </Pod>
            ) 
        }
    }