import React, { Component } from 'react';
// Template
import Row from "../../../../../Template/Page/Row";
import Pod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";
import ChartContainer from "../../../../../Template/Page/Containers/ChartContainer";

// Variables 
import ListHistory from "../../../../../Venders/MaterialUI/Lists/List_History"

export default class Home_Overview extends Component {
    componentWillMount() { } 
    render() {
        const icons= {
            "HasInfo":true,
            "Info":"FIX",
            "Interactive":false,
            "Filterable":false 
          }
        return (
            <Row className="PodRow">
                <ChartContainer
                    DisplayIcons={icons}
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