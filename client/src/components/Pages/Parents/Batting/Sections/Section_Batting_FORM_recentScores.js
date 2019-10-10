import React, { Component } from 'react';

import Row from "../../../../Template/Page/Row";
import PodWrapper from "../../../../Elements/pods/Pod_Outer_Wrapper";
import Title from "../../../../Elements/type/PageTitle";

import Table from "../../../../Elements/Tables/RecentScores";

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