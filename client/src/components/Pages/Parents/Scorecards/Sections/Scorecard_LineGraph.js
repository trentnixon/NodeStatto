import React, { Component } from 'react';

// Template
import Row from "../../../../Template/Page/Row";
import ChartContainer from "../../../../Template/Page/Containers/ChartContainer";
import Pod from "../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";

// Charts
import Chart from "../../../../Venders/ApexCharts/AreaChart";

// Start Class
export default class Section_Rankings extends Component {
    
    componentWillMount() { } 
    shouldComponentUpdate(){return true;}
    componentDidUpdate(nextProps, nextState){} 
    render() {
        const icons= {
            "HasInfo":true,
            "Info":" ",
            "Interactive":true,
            "Filterable":false 
          }
        return ( 
                <Row className="PodRow ">
                    <ChartContainer
                         DisplayIcons={icons}
                        Title="WORM"
                        flex=" flex-100"
                    >
                        <Pod canvas="canvas1" className=" flex-100">
                            <Chart  series={this.props.SC} Labels={null} />
                        </Pod> 
                    </ChartContainer>
                </Row>
            )
        }
    } 