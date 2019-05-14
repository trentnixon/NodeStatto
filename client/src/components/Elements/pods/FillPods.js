import React, { Component } from 'react';
// import {Animated} from "react-animated-css";

import Pod from "./Pod_Outer_Wrapper";
import PodHeader from "./PodStructure/Pod_Header";
import PodBody from "./PodStructure/Pod_Value_and_Icon_Body";

//import SubTitle from "../type/PageSubTitle";

export default class FillPods extends Component {
    componentWillMount() { } 
    render() {
        
        //console.log(this.props.Percentage);

        let FillStyle = {  height: this.props.Percentage+"%" }

        return (
                <Pod  col="col-md-3 col-lg-3  col-xl-4 col-12 col-sm-6" type="FillPod" canvas="canvas1" >
                    
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