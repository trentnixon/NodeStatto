import React, { Component } from 'react';
import Row from "../../../../../Template/Page/Row";
import Pod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";
import Title from "../../../../../Template/Page/Typography/PageTitle";

import InteractiveScatterChart from "../../../../../Venders/ApexCharts/ScatterChart";

let Series=[]
function CreateScatter(CLEAN,range){
   
    let series=[] 
    CLEAN.map((item,i)=>{
          if(item.Batting){
                  if(item.Batting.RunInt>= range.min && item.Batting.RunInt <= range.max )
                      series.push([(item.Meta.FixtureInt*1000),item.Batting.RunInt])
          }
          return true;
    })
    return series;
}

export default class Section_Default extends Component {
    componentWillMount() {
        Series =  [
            {
              name: '0 - 19',
              data: CreateScatter(this.props.DATA,{ min: 0, max: 19})
            },
            { 
                name: '20-29',
                data: CreateScatter(this.props.DATA,{ min: 20, max: 29})
            },
            {
                name: '30-39',
                data: CreateScatter(this.props.DATA,{ min: 30, max: 39})
            },
            {
                name: '40-49',
                data: CreateScatter(this.props.DATA,{ min: 40, max: 49})
            },{
                name: '50-59',
                data: CreateScatter(this.props.DATA,{ min: 50, max: 59})
            },{
                name: '60 +',
                data: CreateScatter(this.props.DATA,{ min: 60, max: 600})
            },
          ]
        //console.log(Series);
    } 
    render() {
   
        return ( 
            <Row className="PodRow">
                    <Title Title={this.props.TITLE.TITLES.SCORES} /> 
                    <Pod canvas="canvas1 " className="flex-100">
                        <InteractiveScatterChart 
                            LookUp={this.props.DATA} 
                            DATA={Series} 
                            HS={this.props.HS} 
                            Disc="Batting"
                            Var="RunInt" 
                        />
                    </Pod>
            </Row> 
        ) 
    }
} 