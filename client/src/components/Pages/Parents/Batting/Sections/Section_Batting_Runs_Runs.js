import React, { Component } from 'react';
import history from  '../../../../../History';
// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"
import ChartContainer from "../../../../Template/Page/ChartContainer";
// Charts
import Bar from "../../../../Charts/BarChart_with_ClickEvent_LINK"; 
//import GamesPlayed from "../../../../Elements/InteractiveCharts/PieChartGamesPlayed_Dashboard";
// Elements

let Labels=[],MonthSeries=[];

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

        Labels=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
       
        RunsYear=[
                    { 
                        name:"Jan",
                        data:[] 
                    },
                    {
                        name:"Feb",
                        data:[]
                    },
                    {
                        name:"Mar",
                        data:[]
                    },
                    {
                        name:"Apr",
                        data:[]
                    },
                    {
                        name:"May",
                        data:[]
                    },
                    {
                        name:"Jun",
                        data:[]
                    },
                    {
                        name:"Jul",
                        data:[]
                    },
                    {
                        name:"Aug",
                        data:[]
                    },
                    {
                        name:"Sep",
                        data:[]
                    },
                    {
                        name:"Oct",
                        data:[]
                    },
                    {
                        name:"Nov",
                        data:[]
                    },
                    {
                        name:"Dec",
                        data:[]
                    }
                ]

        
        MonthSeries=[];
        this.props.DATA.overTheYears.map((h,i)=>{

                let t=0;
            
                if(!MonthSeries[i]){ 
                    MonthSeries.push({'name':h.int, 'data':[]});
                    while (t < 12) { 
                            MonthSeries[i].data.push(0); 
                            t++;
                    }
                }
            h.Month.map((m,t)=>{
                    MonthSeries[i].data[m-1] = MonthSeries[i].data[m-1] + parseInt(h.HistoryRuns[t]);
            })
                RunsYear = MonthSeries;
          });
    }

    render() {
        
        console.log(this.props.PathOpt);
        return (  
            <Row className="PodRow">
                <ChartContainer
                    Info={this.props.TITLE.DESC.TODO}
                    Interactive={true}
                    Title="Runs over the Years by Month"
                    flex=" flex-100"
                >
                    <Pod  className="" canvas="canvas1"> 
                        <Bar  
                            series={RunsYear}  
                            Labels={Labels} 
                            BasePath={'/batting/deep'}/>
                    </Pod>  
                </ChartContainer>
            </Row>
            )
        }
    }