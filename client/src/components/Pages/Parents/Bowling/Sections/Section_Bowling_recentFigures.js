import React, { Component } from 'react';

import Row from "../../../../Template/Page/Row";
import PodWrapper from "../../../../Elements/pods/Pod_Outer_Wrapper";
import Title from "../../../../Elements/type/PageTitle";
import Table from "../../../../Elements/Tables/RecentFigures";

let ThisData;
export default class Section_Rankings extends Component {
    componentWillMount() {
        ThisData = this.props.Data.slice(Math.max(this.props.Data.length - 10, 1)).reverse();
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