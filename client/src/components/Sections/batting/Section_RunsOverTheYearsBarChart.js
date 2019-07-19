import React, { Component } from 'react';
import Row from "../../Template/Page/Row";
import Title from "../../Elements/type/PageTitle";
import InteractiveChartRunsOverYears from "../../Elements/InteractiveCharts/BarChart_RunsOverTheYears";

export default class Section_Default extends Component {
    componentWillMount() {} 
    render() {
        return ( 
            <Row class="PodRow">
                <Title Title={this.props.Title}/>
                <InteractiveChartRunsOverYears {... this.props}/>           
            </Row>
        ) 
    }
} 