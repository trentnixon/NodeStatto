import React, { Component } from 'react';
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
import Title from "../../../../Elements/type/PageTitle";

import InteractiveScatterChart from "../../../../Charts/ScatterChart";

let Series=[];
function CreateScatter(CLEAN,range){
   
    let series=[]
    CLEAN.map((item,i)=>{
          if(item.Batting){
                  if(item.Batting.BallsFacedInt>= range.min && item.Batting.BallsFacedInt <= range.max )
                      series.push([(item.Meta.FixtureInt*1000),item.Batting.BallsFacedInt])
          
        }
    })
    return series;
}

export default class Section_Default extends Component {
    componentWillMount() {
        Series =  [
            {
              name: '0 - 4',
              data: CreateScatter(this.props.DATA,{ min: 0, max: 4})
            },
            { 
                name: '5-9',
                data: CreateScatter(this.props.DATA,{ min: 5, max: 9})
            },
            {
                name: '10-14',
                data: CreateScatter(this.props.DATA,{ min: 10, max: 14})
            },
            {
                name: '15-19',
                data: CreateScatter(this.props.DATA,{ min: 15, max: 19})
            },{
                name: '20-24',
                data: CreateScatter(this.props.DATA,{ min: 20, max: 24})
            },{
                name: '25-29',
                data: CreateScatter(this.props.DATA,{ min: 25, max: 29})
            },{
                name: '30-39',
                data: CreateScatter(this.props.DATA,{ min: 30, max: 39})
            },{
                name: '40-49',
                data: CreateScatter(this.props.DATA,{ min: 40, max: 49})
            },{
                name: '50-100',
                data: CreateScatter(this.props.DATA,{ min: 50, max: 600})
            },
          ]
        //console.log(Series);
    } 
    render() {
        let  BF=0;
        this.props.DATA.map((item,i)=>{
            if(item.Batting)
                if(item.Batting.BallsFacedInt > BF)
                    BF=item.Batting.BallsFacedInt; 
        })
        return ( 
            <Row class="PodRow">
                    <Title Title={this.props.TITLE.SUBS.BF + ' '+ this.props.TITLE.CHARTS.SCATTER + ' ' + this.props.TITLE.CHARTS.CHART} /> 
                    <Pod canvas="canvas1 " ClassName="flex-100">
                        <InteractiveScatterChart 
                            LookUp={this.props.DATA} 
                            DATA={Series} 
                            HS={BF}  
                            Disc="Batting"
                            Var="BallsFacedInt"
                        />
                    </Pod>
            </Row> 
        ) 
    }
} 