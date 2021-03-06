import React, { Component } from 'react';
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";
import Title from "../../../../Template/Page/Typography/PageTitle";

import InteractiveScatterChart from "../../../../Venders/ApexCharts/ScatterChart";

let Series=[]
function CreateScatter(CLEAN,range,OrderBy,FilterID,d,v){
   
    let series=[] 
    CLEAN.map((item,i)=>{
     
        if(item.Meta[OrderBy] === FilterID)

          if(item[d]){
            
                series.push([(item.Meta.FixtureInt*1000),item[d][v]])
          }
          return true;
    })
    return series;
}

export default class Section_Default extends Component {
    componentWillMount() {
        Series =  [
            {
              name: 'Runs',
              data: CreateScatter(this.props.DATA,{ min: 0, max: 19}, this.props.OrderBy, this.props.FilterID,'Batting','RunInt')
            },
            { 
                name: 'Balls Faced',
                data: CreateScatter(this.props.DATA,{ min: 20, max: 29}, this.props.OrderBy, this.props.FilterID,'Batting','BallsFacedInt')
            },
            {
                name: 'Wickets',
                data: CreateScatter(this.props.DATA,{ min: 30, max: 39}, this.props.OrderBy, this.props.FilterID,'Bowling','Wickets')
            },
            {
                name: 'Runs Conceeded',
                data: CreateScatter(this.props.DATA,{ min: 40, max: 49}, this.props.OrderBy, this.props.FilterID,'Bowling','Runs')
            }
          ]
    } 
    render() {
  //console.log(this.props)
        return ( 
            <Row className="PodRow">
                    <Title Title={this.props.TITLES.CHARTS.SCATTER} /> 
                    <Pod canvas="canvas1 " className="flex-100">
                        <InteractiveScatterChart 
                            LookUp={this.props.DATA} 
                            DATA={Series} 
                            HS={this.props.HS} 
                            Disc={null}
                            Var={null} 
                        />
                    </Pod>
            </Row> 
        ) 
    }
} 