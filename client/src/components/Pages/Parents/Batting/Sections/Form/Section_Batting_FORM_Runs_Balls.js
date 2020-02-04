import React, { Component } from 'react';

import { BattingBasics } from "../../../../../../actions/UI/UI"
// Template
import Row from '../../../../../Template/Page/Row';
import Pod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic"
import ChartContainer from "../../../../../Template/Page/Containers/ChartContainer";

// Charts
import Bar from "../../../../../Venders/ApexCharts/BarChart";

let Labels=[],RunsYear=[];
let SentSeries=null;
export default class Section_Batting_BallsFaced extends Component {
    componentWillMount() {

        SentSeries = BattingBasics(this.props.FORMDATA)
        Labels=SentSeries[1]
 
        RunsYear=[
            {
                name:"Runs Scored",
                data:SentSeries[3],
                type: 'column',
            }, { 
                name:"Balls Faced",
                data:SentSeries[9], 
                type: 'column',
            },{ 
                name:"Strike Rate",
                data:SentSeries[11],
                type: 'area',
            }
        ];
    }
    render() {
        const icons= {
            "HasInfo":true,
            "Info":this.props.TITLES.DESC.TODO,
            "Interactive":false,
            "Filterable":false 
          }
        return ( 
            <Row className="PodRow"> 
                <ChartContainer 
                    DisplayIcons={icons}
                    Title={this.props.TITLES.SUBS.RUNS + ' vs '+this.props.TITLES.SUBS.BF}
                    flex=" flex-100"
                >
                    <Pod className="flex-100" canvas="canvas1">
                        <Bar series={RunsYear} Labels={Labels} />
                     </Pod> 
                </ChartContainer>
            </Row>            
            )
        }
    } 