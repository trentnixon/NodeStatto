import React, { Component } from 'react';
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
import Title from "../../../../Elements/type/PageTitle";


import InteractiveHeatMap from "../../../../Charts/HeatMap";

let Series=[]
function CreateScatter(CLEAN,range){

    let series=[0,0,0,0,0,0,0,0,0,0,0,0] 
    let int=0;
    CLEAN.map((item,i)=>{
          if(item.Batting){
                  if(item.Batting.RunInt>= range.minRuns && item.Batting.RunInt <= range.maxRuns )
                  {
                      if(item.Batting.RunInt >  45){
                        //console.log(item.Batting.RunInt, item.Batting.BallsFacedInt, parseInt(item.Batting.BallsFacedInt/5))
                       
                      }
                     
                       int =  Math.ceil(item.Batting.BallsFacedInt/5);
                        int = int -1;
                        if(int > 11){ int = 11}
                        series[int] = series[int]+1
                  }
          }
          return true;
    })
    return series;
}

export default class Section_Default extends Component {
    componentWillMount() {
        Series =  [
            {
              name: '0 - 4 runs',
              data: CreateScatter(this.props.DATA,{ minRuns:0,maxRuns:4})
            },
            { 
                name: '5 - 9 runs',
                data: CreateScatter(this.props.DATA,{ minRuns:5,maxRuns:9})
            },
            {
                name: '10 - 14 runs',
                data: CreateScatter(this.props.DATA,{minRuns:10,maxRuns:14})
            },
            {
                name: '15 - 19 runs',
                data: CreateScatter(this.props.DATA,{  minRuns:15,maxRuns:19})
            },{
                name: '20 - 24 runs',
                data: CreateScatter(this.props.DATA,{ minRuns:20,maxRuns:24})
            },{
                name: '25 - 29 runs',
                data: CreateScatter(this.props.DATA,{ minRuns:25,maxRuns:29 })
            },{
                name: '30 - 39 runs',
                data: CreateScatter(this.props.DATA,{ minRuns:30,maxRuns:39 })
            },{
                name: '40 - 49 runs',
                data: CreateScatter(this.props.DATA,{ minRuns:40,maxRuns:49 })
            },{
                name: '50 - 59 runs',
                data: CreateScatter(this.props.DATA,{ minRuns:50,maxRuns:59 })
            },{
                name: '60 - 69 runs',
                data: CreateScatter(this.props.DATA,{ minRuns:60,maxRuns:69 })
            },{
                name: '70 - 99 runs',
                data: CreateScatter(this.props.DATA,{ minRuns:70,maxRuns:99 })
            },{
                name: '100 + runs',
                data: CreateScatter(this.props.DATA,{ minRuns:100,maxRuns:300 })
            }
          ]
        console.log(Series);
        //['0', '1-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54','55-59','60-64', '65+']
    } 
    render() {
   
        return ( 
            <Row className="PodRow">
                    <Title Title={"HeatMap of " + this.props.TITLE.TITLES.SCORES } /> 
                    <Pod canvas="canvas1 " className="flex-100">
                        <InteractiveHeatMap 
                            LookUp={this.props.DATA} 
                            series={Series} 
                            HS={this.props.HS} 
                            Disc={null}
                            Var={null} 
                        />
                    </Pod>
            </Row> 
        ) 
    }
} 