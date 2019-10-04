import React, { Component } from 'react';
// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
import ChartContainer from "../../../../Template/Page/ChartContainer";

// Variables
import ListHistory from "../../../../Elements/Lists/List_History"

export default class Home_Overview extends Component {
    componentWillMount() { } 
    render() {
        return (
            <Row className="PodRow">
                <ChartContainer
                        Info={this.props.TITLES.SITE.DESC.TODO}
                        Interactive={false}
                        Title="Games Played"
                        flex=" flex-100"
                    >
                    <Pod canvas="canvas1 " className="flex-100">
                            <ListHistory  Games={this.props.Data} />
                    </Pod>
                </ChartContainer>
            </Row>
            )
        }
    }