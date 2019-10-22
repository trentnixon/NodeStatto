import React, { Component } from 'react';

import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";

//import SubTitle from "../../Elements/type/PageSubTitle";
import ChartContainer from "../../../../Template/Page/ChartContainer";
import {BowlingBasics, FindDataSeries} from "../../../../../actions/UI";


// Form 
import SelectYear from "../../../../Elements/FormElements/FormSelect/SelectYear";
import Bar from "../../../../Charts/BarChart";


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

        return (
            <Row className="PodRow">
                <ChartContainer
                    Info={this.props.TITLE.DESC.TODO}
                    Interactive={true}
                    Title=""
                    flex=" flex-100"
                >
                <SelectYear {... this.props}/> 
                    
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