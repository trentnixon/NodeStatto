import React, { Component } from 'react';

// Template
import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";

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

export default class Section_Rankings extends Component {
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
            <div className="Section Section_Runs">
                <Row>
                    <Title Title="Balls Faced" />
                </Row>
                <Row>
                    <Pod col="col-md-12" > 
                        <SubTitle  Title="Balls Faced over the Years (%)"  />
                    
                        <Row>
                        <Pod col="col-md-7" >
                          <Bar 
                                 series={RunsYear} 
                                 Labels={Labels}
                                 horizontal={false}
                                />
                        </Pod>
                        <Pod col="col-md-5" >
                            <Donut 
                                series={PieBalls}
                                Labels={Labels}
                            />
                        </Pod>
                            
                       
                        </Row>
                    </Pod>
                    
                   
                    <Pod col="col-md-12" > 
                    <Title Title="Most Balls Faced for and against" />
                        Text

                        <Title Title="Runs to Balls Faced" />
                        Interactive Bar Chart
                    </Pod>

                 
                </Row> 
            </div>
            )
        }
    } 