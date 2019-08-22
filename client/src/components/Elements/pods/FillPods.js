import React, { Component } from 'react';

import Pod from "./Pod_Outer_Wrapper";
import PodHeader from "./PodStructure/Pod_Header";
import PodBody from "./PodStructure/Pod_Value_and_Icon_Body";

export default class FillPods extends Component {
    componentWillMount() { } 
    render() {
    
        let FillStyle = {  height: this.props.Percentage+"%" }

        return (
                <Pod  className={this.props.className} type="FillPod" canvas="canvas1" >
                    <PodHeader icon="" label ={this.props.Label} />
                        <PodBody 
                            TopLine={parseInt(this.props.Value, 10).toFixed(0)}
                            Icon =""
                            BottomLine={parseInt(this.props.Percentage,10).toFixed(0)+"% of " +this.props.Title}
                        />
                        <div className="fill" style={FillStyle}>
                    </div>  
                </Pod>
            ) 
        }
    }