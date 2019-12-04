import React, { Component } from 'react';
// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"
import ChartContainer from "../../../../Template/Page/ChartContainer";
// Charts
import Bar from "../../../../Charts/BarChart_with_ClickEvent_LINK"; 
// Elements

let Labels=[],MonthSeries=[];

let WicketsYear=[ 
    { 
        name:"Wickets", 
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
       
        WicketsYear=[
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
        //console.log(this.props.DATA.overTheYears);
        this.props.DATA.overTheYears.map((h,i)=>{
                let t=0;
                console.log(h)
                if(!MonthSeries[i]){ 
                    MonthSeries.push({'name':h.int, 'data':[]});
                    while (t < 12) { 
                            MonthSeries[i].data.push(0); 
                            t++;
                    }
                }
                h.Month.map((m,t)=>{
                    MonthSeries[i].data[m-1] = MonthSeries[i].data[m-1] + h.CaughtARR[t];
                        return true;
                    })
                    WicketsYear = MonthSeries;
                return true;
                 
          });
         
    }

    render() {
        
        return (  
            <Row className="PodRow">
                <ChartContainer
                    Info={this.props.TITLE.SITE.DESC.TODO}
                    Interactive={true}
                    Title="Catches by Month on Years"
                    flex=" flex-100"
                >
                    <Pod  className="" canvas="canvas1"> 
                        <Bar   
                            series={WicketsYear}  
                            Labels={Labels} 
                            BasePath={'/keeping/deep'}/>
                    </Pod>  
                </ChartContainer>
            </Row>
            )
        }
    }