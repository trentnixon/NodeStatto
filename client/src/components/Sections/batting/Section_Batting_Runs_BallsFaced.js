import React, { Component } from 'react';

// Template
import Row from "../../Template/Page/Row";
import Pod from "../../Elements/pods/Pod_Outer_Wrapper"
import Title from "../../Elements/type/PageTitle";
//import SubTitle from "../../Elements/type/PageSubTitle";

// Charts
import Donut from "../../Charts/donut"; 
import Bar from "../../Charts/BarChart";

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
                name:"BallsFaced",
                data:[]
            },
            {
                name:"Innings",
                data:[]
            }
        ];
     //console.log(this.props.DATA.CAREER.Career.batting)
     // eslint-disable-next-line
        this.props.DATA.CAREER.Career.batting.overTheYears.map((h,i)=>{ 
          
                PieRuns.push(h.TotalRuns);
                PieBalls.push(h.TotalBF)
                RunsYear[0].data.push(h.TotalBF);
                RunsYear[1].data.push(h.HistoryRuns.length);
                Labels.push(h.int);
          })
    }
    render() {
        return ( 
            <Row class="PodRow">
                    
                    <Title Title="Balls Faced" />
                    <Pod class ="flex-70" canvas="canvas1">
                       
                            <Bar 
                                 series={RunsYear} 
                                 Labels={Labels}
                                 horizontal={false}
                                />

                     </Pod>  
                     <Pod class ="flex-30" type="Naked" canvas="">
                        <Donut 
                                    series={PieBalls}
                                    Labels={Labels}
                                />
                    </Pod>  
                    
                    <Pod  class="flex-100" canvas="canvas1">
                            <Title Title="Most Balls Faced for and against" />
                    </Pod>
                </Row>            
            )
        }
    } 