import React, { Component } from 'react';

import Row from "../Template/Page/Row";
import Pod from "../Template/Page/Pod";

import RankingPods from "../Elements/pods/RankingPods";
import Title from "../Elements/type/PageTitle";
import SubTitle from "../Elements/type/PageSubTitle";

import Chart from "../Charts/LineChart";

export default class Section_Rankings extends Component {
    componentWillMount() {}
    render() {
        console.log(this.props.isVisible)
        return (
                <div className="Section_Rankings" >
                    <Row class="ContainerRow">
                        <Pod col="col-md-12" > 
                            <Title Title={this.props.Title}/>
                            <SubTitle Title={this.props.SubTitle} />
                        
                            <Row>
                                <Pod col="col-md-9" > 
                                        <Chart  
                                            series={[{data:this.props.Rankings}]} 
                                            visable={this.props.isVisible}
                                        />
                                </Pod>
                                <Pod col="col-md-3" > 
                                    <RankingPods 
                                        Rankings={this.props.Rankings} 
                                        visable={this.props.isVisible}
                                    />
                                </Pod>
                            </Row>
                        </Pod>
                    </Row>
                </div> 
            )
        }
    } 