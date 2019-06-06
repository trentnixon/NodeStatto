import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import PodWrapper from "../../Elements/pods/Pod_Outer_Wrapper";
import Title from "../../Elements/type/PageTitle";
//import SubTitle from "../Elements/type/PageSubTitle";

import Table from "../../Elements/Tables/RecentScores";
let ThisData 
export default class Section_Rankings extends Component {
    componentWillMount() { 
        ThisData = this.props.Data.slice(Math.max(this.props.Data.length - 10, 1)).reverse();
    }
    render() {
        return (
            <Row class="PodRow">  
                <Title Title="Recent Scores" />
                    <PodWrapper canvas="canvas1">
                        <Table   Data={ThisData} /> 
                </PodWrapper>
            </Row>
            )
        }
    } 