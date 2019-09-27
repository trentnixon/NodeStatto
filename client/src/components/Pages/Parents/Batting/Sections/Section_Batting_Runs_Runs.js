import React, { Component } from 'react';
import {Animated} from "react-animated-css";
// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"
import ChartContainer from "../../../../Template/Page/ChartContainer";
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";
//import Title from "../../../../Elements/type/PageTitle";
import SubTitle from "../../../../Elements/type/PageSubTitle";

// Charts
import Donut from "../../../../Charts/donut";
import Bar from "../../../../Charts/BarChart"; 
//import GamesPlayed from "../../../../Elements/InteractiveCharts/PieChartGamesPlayed_Dashboard";
// Elements

let PieRuns=[],Labels=[], PieBalls=[],TextSeries=[];

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
        TextSeries=[]
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

        console.log(this.props.DATA.runs);
        // eslint-disable-next-line
        this.props.DATA.overTheYears.map((h,i)=>{
                RunsYear[0].data.push(h.TotalRuns);
                RunsYear[1].data.push(h.HistoryRuns.length);
                Labels.push(h.int);
              //  PieBalls.push(h.TotalBF);
              //  PieRuns.push(h.TotalRuns);

          })
    }
    render() {
        
        console.log(RunsYear, PieRuns, Labels, TextSeries);
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return (  
            <Row className="PodRow">
                <ChartContainer
                    Info={this.props.TITLE.DESC.TODO}
                    Interactive={true}
                    Title="Runs over the Years"
                    flex=" flex-100"
                >
                    <Pod  className="" canvas="canvas1"> 
                        <Bar  series={RunsYear}  Labels={Labels}/>
                    </Pod>  
                </ChartContainer>
            </Row>
            )
        }
    } 


    /**
     *  <ChartContainer
                    Info={this.props.TITLE.DESC.TODO}
                    Interactive={true}
                    Title="&nbsp;"
                    flex=" flex-40 hide-Mobile"
                >
                    <Pod className="" type="Naked" canvas="">      
                            <Donut series={PieRuns} Labels={Labels}  />
                    </Pod>   
                </ChartContainer>   
     */