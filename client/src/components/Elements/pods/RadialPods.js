import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Pod from "../../Template/Page/Pod";

import SubTitle from "../type/PageSubTitle";

// Charts
import Radial from "../../Charts/RankingRadial";

export default class RankingPods extends Component {
    componentWillMount() { } 
    render() {
        return (
                <Pod  col="col-md-4 col-sm-6" >
                    <Radial 
                        Value={this.props.Value}
                        Label={this.props.Label}
                        Percentage={this.props.Percentage}
                        Created={this.props.Created}
                    />
                    <div className="RadialTextContainer">
                        <SubTitle Title={this.props.TitleValue} />
                        <SubTitle Title={this.props.Title} />
                    </div>
                </Pod>
            )
        }
    }