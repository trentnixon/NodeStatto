import React, { Component } from 'react';

// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"

//import Title from "../../../../Elements/type/PageTitle";
import SubTitle from "../../../../Elements/type/PageSubTitle";

// Charts
import Donut from "../../../../Charts/donut";
import Bar from "../../../../Charts/BarChart"; 
//import GamesPlayed from "../../../../Elements/InteractiveCharts/PieChartGamesPlayed_Dashboard";
// Elements

let PieRuns=[],Labels=[], PieBalls=[];

let RunsYear=[ 
    { 
        name:"Runs", 
        data:[]
    },
    {
        name:"Innings", 
        data:[]
    }
];

export default class Section_Rankings extends Component {
         
    componentWillMount() {

      this.setState({ year: this.props.DATA.overTheYears[0].int});
        
      PieRuns=[];
      Labels=[];
      PieBalls=[];
      RunsYear=[
                { 
                    name:"Runs",
                    data:[] 
                },
                {
                    name:"Innings",
                    data:[]
                }
            ]

        // eslint-disable-next-line
        this.props.DATA.overTheYears.map((h,i)=>{
                RunsYear[0].data.push(h.TotalRuns);
                RunsYear[1].data.push(h.HistoryRuns.length);
                Labels.push(h.int);
                PieBalls.push(h.TotalBF);
                PieRuns.push(h.TotalRuns)
          })
    }
    render() {
        
        console.log(RunsYear[0].data.length);
        
        return ( 
            <Row className="PodRow">
                 <SubTitle  Title="Runs over the Years" />

                 <Pod  className="flex-60" canvas="canvas1"> 
                        <Bar  series={RunsYear}  Labels={Labels}/>
                 </Pod>      

                 <Pod className="flex-40" type="Naked" canvas="">      
                        <Donut series={PieRuns} Labels={Labels}  />
                </Pod>      
            </Row>
            )
        }
    } 