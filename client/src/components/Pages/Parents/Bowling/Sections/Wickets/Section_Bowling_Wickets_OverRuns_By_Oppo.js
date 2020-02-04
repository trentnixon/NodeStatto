import React, { Component } from 'react';

import Row from "../../../../../Template/Page/Row";
import Pod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";

import ChartContainer from "../../../../../Template/Page/Containers/ChartContainer";
import {BowlingBasics, FindDataSeries} from "../../../../../../actions/UI/UI";


// Form 
import Bar from "../../../../../Venders/ApexCharts/BarChart";


export default class Section_Rankings extends Component {
   
    state = {
        Data:[],
        Labels:[]
      }
      createWickets(data,year){

        let Series = BowlingBasics(FindDataSeries(data,year))
        let  WicketsYears=[ { name:"Wickets", data:Series[1] },{ name:"Runs",data:Series[5] }]
        this.setState(
                    { 
                        Data:WicketsYears,
                        Labels:Series[14],
                    }
            );

        return WicketsYears;
      }


      componentDidMount() {}
     
    

        componentWillMount() {
        this.createWickets(this.props.DATA.CLEAN,this.props.UX.FORMS.SELECT.YEAR)  
        }
        shouldComponentUpdate(nextProps, nextState){ return true;}
        componentWillUpdate(nextProps, nextState){
            if(this.props.UX.FORMS.SELECT.YEAR !== nextProps.UX.FORMS.SELECT.YEAR)
            { this.createWickets(this.props.DATA.CLEAN,nextProps.UX.FORMS.SELECT.YEAR) }
    
        }
        
    render() {
        const icons= {
            "HasInfo":true,
            "Info":this.props.TITLE.DESC.TODO,
            "Interactive":true,
            "Filterable":false 
          }
        return (
            <Row className="PodRow">
                <ChartContainer
                   DisplayIcons={icons}
                    Title=""
                    flex=" flex-100"
                >
           
                    
                        <Pod canvas="canvas1" className="flex-100">
                                <Bar 
                                    series={this.state.Data}
                                    Labels={this.state.Labels}
                                />
                    </Pod>
                    </ChartContainer>
                </Row>
            
            )
        }
    } 