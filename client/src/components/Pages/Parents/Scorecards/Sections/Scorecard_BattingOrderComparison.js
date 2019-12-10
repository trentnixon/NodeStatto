import React, { Component } from 'react';

// Template
import Row from "../../../../Template/Page/Row";
import ChartContainer from "../../../../Template/Page/ChartContainer";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";

// Charts
import Bar from "../../../../Charts/BarChart_SingleInt";
// Start Class
export default class Section_Rankings extends Component {
    
    componentWillMount() { } 
    shouldComponentUpdate(){return true;}
    componentDidUpdate(nextProps, nextState){} 
    render() {
     //console.log(this.props.SC);
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
                        Title="Batting Order Comparison"
                        flex=" flex-100"
                    >
                        <Pod canvas="canvas1" className=" flex-100">
                            <Bar 
                                horizontal={false}
                                series={this.props.SC} 
                                Labels={[1,2,3,4,5,6,7,8]} 
                             />
                        </Pod> 
                    </ChartContainer>
                </Row>
            )
        }
    } 