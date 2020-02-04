import React, { Component } from 'react';

import Row from "../../../../../Template/Page/Row";
import PodWrapper from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";
import Title from "../../../../../Template/Page/Typography/PageTitle";
import Table from "../../../../../Template/Page/Structure/Tables/RecentScores";

export default class Section_Rankings extends Component {
    componentWillMount() {}
    render() {
        return ( 
            <Row className="PodRow">  
                <Title Title="Recent Scores" />
                    <PodWrapper className="flex-100" canvas="canvas1">
                        <Table   Data={this.props.FORMDATA} /> 
                </PodWrapper>
            </Row> 
            )
        }
    } 