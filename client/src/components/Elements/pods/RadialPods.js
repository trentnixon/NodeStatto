import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Pod from "../../Template/Page/Pod";

import Title from "../type/PageTitle";
import SubTitle from "../type/PageSubTitle";

// Charts
import Radial from "../../Charts/RankingRadial";

/**
 * <Radial 
                        Value={this.props.Value}
                        Label={this.props.Label} 
                        Percentage={this.props.Percentage}
                        Created={this.props.Created}
                    />
 */
export default class RankingPods extends Component {
    componentWillMount() { } 
    render() {

            console.log(this.props)

        return (
                <Pod  col="col-md-4 col-lg-4  col-xl-2 col-12 col-sm-6" >
                    
                    

                    <div className="RadialTextContainer">
                        <Title 
                            Title={this.props.Label} 
                        />
                         <Title 
                            Title={this.props.Value} 
                        />
                        
                        <SubTitle Title={this.props.TitleValue} />
                        <SubTitle Title={this.props.Title} />
                    </div>
                </Pod>
            )
        }
    }