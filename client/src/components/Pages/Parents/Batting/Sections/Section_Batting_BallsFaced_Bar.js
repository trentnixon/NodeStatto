import React, { Component } from 'react';

// Template
import Row from '../../../../Template/Page/Row';
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"
import ChartContainer from "../../../../Template/Page/ChartContainer";

// Charts
import Bar from "../../../../Charts/BarChart";

let RunsYear=[],Labels=[];
export default class Section_Batting_BallsFaced extends Component {
    componentWillMount() {
        Labels=[]
        RunsYear=[
            { 
                name:"Balls Faced",
                data:[],
                type: 'column',
            },{
                name:"Strike Rate",
                data:[],
                type: 'area',
            }
        ];

     // eslint-disable-next-line
        this.props.DATA.map((h,i)=>{ 
                RunsYear[0].data.push(h.TotalBF);
                RunsYear[1].data.push(((h.TotalRuns/h.TotalBF)*100).toFixed(2));
                Labels.push(h.int);
          })
    } 
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
                        Title={this.props.TITLES.SUBS.BF + ' vs ' +this.props.TITLES.SUBS.SR}
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