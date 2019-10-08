import React, { Component } from 'react';

import { BattingBasics } from "../../../../../actions/UI"
// Template
import Row from '../../../../Template/Page/Row';
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"
import Title from "../../../../Elements/type/PageTitle";
//import SubTitle from "../../../../Elements/type/PageSubTitle";


// Charts
import Bar from "../../../../Charts/BarChart";

let Labels=[],RunsYear=[];
let ThisData, SentSeries=null;
export default class Section_Batting_BallsFaced extends Component {
    componentWillMount() {

        ThisData = this.props.Data.slice(Math.max(this.props.Data.length - 5, 1)).reverse();
        SentSeries = BattingBasics(ThisData)
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

        //console.log(RunsYear);
    }
    render() {
        return ( 
            <Row className="PodRow">
                    <Title Title={this.props.TITLES.SUBS.RUNS + ' vs '+this.props.TITLES.SUBS.BF}/>
                    <Pod className="flex-100" canvas="canvas1">
                        <Bar series={RunsYear} Labels={Labels} />
                     </Pod> 
                </Row>            
            )
        }
    } 