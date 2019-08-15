import React, { Component } from 'react';

// Template
import Row from '../../../../Template/Page/Row';
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"
import Title from "../../../../Elements/type/PageTitle";
//import SubTitle from "../../../../Elements/type/PageSubTitle";

// Charts
import Donut from "../../../../Charts/donut"; 
import Bar from "../../../../Charts/BarChart";

let PieRuns=[], Labels=[], PieBalls=[];
let RunsYear=[
    { 
        name:"BallsFaced",
        data:[]
    },
    {
        name:"Innings",
        data:[]
    }
];

export default class Section_Batting_BallsFaced extends Component {
    componentWillMount() {

        PieRuns=[]
        Labels=[]
        PieBalls=[];

        RunsYear=[
            {
                name:"Runs Scored",
                data:[]
            },{ 
                name:"Balls Faced",
                data:[]
            }
            
        ];

     // eslint-disable-next-line
        this.props.DATA.map((h,i)=>{ 
                PieRuns.push(h.TotalRuns);
                PieBalls.push(h.TotalBF)
                RunsYear[1].data.push(h.TotalBF);
                RunsYear[0].data.push(h.TotalRuns);
                Labels.push(h.int);
          })
    }
    render() {
        return ( 
            <Row class="PodRow">
                    
                    <Title Title={this.props.TITLES.SUBS.BF}/>
                    <Pod ClassName="flex-60" canvas="canvas1">
                        <Bar series={RunsYear} Labels={Labels} />
                     </Pod>  
                     <Pod ClassName="flex-40" type="Naked" canvas="">
                        <Donut  series={PieBalls} Labels={Labels}/>
                    </Pod>  
                    
                 
                </Row>            
            )
        }
    } 