import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";

import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";

import InteractiveChartRunsOverYears from "../../Elements/InteractiveCharts/BarChart_RunsOverTheYears";

export default class Section_Default extends Component {
    componentWillMount() {} 
    render() {
        return ( 
                <div className="Section_RunsBar" >
                    <Row class="ContainerRow">
                        <Pod col="col-md-12" > 
                            <Title Title={this.props.Title}/>
                            <SubTitle Title={this.props.SubTitle} />
                            <Row>
                                <Pod col="col-md-12" > 
                                    <InteractiveChartRunsOverYears {... this.props}/>
                                </Pod>
                            </Row>
                        </Pod>
                    </Row>
                </div> 
            )
        }
    } 