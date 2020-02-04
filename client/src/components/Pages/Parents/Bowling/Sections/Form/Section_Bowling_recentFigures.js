import React, { Component } from 'react';

import Row from "../../../../../Template/Page/Row";
import PodWrapper from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";
import Title from "../../../../../Template/Page/Typography/PageTitle";
import Table from "../../../../../Template/Page/Structure/Tables/RecentFigures";

let ThisData;
export default class Section_Rankings extends Component {
    componentWillMount() {
        ThisData = this.props.Data.slice(Math.max(this.props.Data.length - 5, 1)).reverse();
    }
    render() {
        return (
            <Row className="PodRow">  
                <Title Title="Recent Figures" />
                    <PodWrapper canvas="canvas1" className="flex-100">
                        <Title Title="Recent Figures"/>
                           <Table  Data={ThisData}/>
                    </PodWrapper>
                </Row>
          
            )
        }
    } 