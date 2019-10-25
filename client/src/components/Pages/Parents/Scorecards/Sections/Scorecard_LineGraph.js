import React, { Component } from 'react';

// Template
import Row from "../../../../Template/Page/Row";
import ChartContainer from "../../../../Template/Page/ChartContainer";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";

// Charts
import Chart from "../../../../Charts/AreaChart";

// Start Class
export default class Section_Rankings extends Component {
    
    componentWillMount() { } 
    shouldComponentUpdate(){return true;}
    componentDidUpdate(nextProps, nextState){} 
    render() {

        return ( 
                <Row className="PodRow ">
                    <ChartContainer
                        Info={" "}
                        Interactive={true}
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