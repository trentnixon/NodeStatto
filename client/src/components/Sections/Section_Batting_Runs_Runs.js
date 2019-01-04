import React, { Component } from 'react';

// Template
import Row from "../Template/Page/Row";
import Pod from "../Template/Page/Pod";
import Title from "../Elements/type/PageTitle";
import SubTitle from "../Elements/type/PageSubTitle";

// Charts
import Donut from "../Charts/donut";
import Bar from "../Charts/BarChart"; 

// Elements
import InteractiveChartRunsOverYears from "../Elements/InteractiveCharts/BarChart_RunsOverTheYears";

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

       this.setState({ year: this.props.DATA.CAREER.Career.batting.overTheYears[0].int});
        
      PieRuns=[], Labels=[], PieBalls=[];
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

        this.props.DATA.CAREER.Career.batting.overTheYears.map((h,i)=>{
                RunsYear[0].data.push(h.TotalRuns);
                RunsYear[1].data.push(h.HistoryRuns.length);
                Labels.push(h.int);
                PieBalls.push(h.TotalBF);
                PieRuns.push(h.TotalRuns)
          })
    }
    render() {
        
        return (
            <div className="Section_Runs">
                <Row>
                    <Title Title="Runs" /> 
                    </Row>
                    <Row>
                    <Pod col="col-md-12" > 
                       <SubTitle 
                                Title="Run % over the Years"
                       />
                       <SubTitle 
                                Title="Possibly move this into a MUI Tabber"
                       />
                    <Row>

                        <Pod col="col-md-8" >
                            <Bar 
                                series={RunsYear} 
                                Labels={Labels}
                                horizontal={false}
                            />
                        </Pod>

                        <Pod col="col-md-4" >
                            <Donut series={PieRuns} Labels={Labels} />
                        </Pod>
                        </Row>
                    </Pod>
                    
                   
                    
                    </Row>

                   <InteractiveChartRunsOverYears {... this.props}/>

                    <Row>
                        <Pod col="col-md-8" > 
                            <Title Title="Notable Scores" />
                            Interactive List
                        </Pod>
                
                        <Pod col="col-md-4" > 
                            <Title Title="Runs by the game" />
                        
                            
                        </Pod>
                    </Row>
            </div>
            )
        }
    } 