import React, { Component } from 'react';

// Template
import Row from "../../../../../Template/Page/Row";
import Pod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";
import ChartContainer from "../../../../../Template/Page/Containers/ChartContainer";
import IconPod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Header_SingleValue_Footer";

// Sections
import InteractiveChart from "../../../../../Venders/ApexCharts/MixedChart";

// Action
import {FilterDataSeries, BattingBasics,CreateGraphDates} from "../../../../../../actions/UI/UI";

// Variables 
let Series=[], NotOut=0;

const SummaryPod = (props) => (
            <IconPod 
                label={props.label}
                total={props.total}
                className="flex-30 flex-m-50"  
                icon=""
                Footer = ""
            />  
);

// Start Class 
export default class Section_Default extends Component {

    state = {
        Series:[],
        Labels:[], 
        NotOuts:0 
      } 


    // Create Data Series
    createSeries(DATA, Year, LEAGUE){

        let NewSeries = FilterDataSeries(DATA,{Year:Year,LW:LEAGUE})
        // Test
        Series = [{
            name: 'Runs',
            type: 'column',
            data: BattingBasics(NewSeries)[3]
          }, {
            name: 'Average',
            type: 'area', 
            data: BattingBasics(NewSeries)[7]
          }];

          this.setState({ 
            Series:Series,
            Labels:CreateGraphDates(NewSeries, "Batting"),
            Year:Year,
        })
    }

   componentWillMount() { 
       this.createSeries(this.props.DATA,this.props.UX.FORMS.SELECT.YEAR,this.props.UX.FORMS.SELECT.LEAGUE) 
    } 
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(this.props.UX.FORMS.SELECT.YEAR !== nextProps.UX.FORMS.SELECT.YEAR || 
           this.props.UX.FORMS.SELECT.LEAGUE !== nextProps.UX.FORMS.SELECT.LEAGUE)
        { this.createSeries(this.props.DATA,nextProps.UX.FORMS.SELECT.YEAR,nextProps.UX.FORMS.SELECT.LEAGUE) }
   
    }
    render() {
        const icons= {
            "HasInfo":true,
            "Info":"ToDo",
            "Interactive":false,
            "Filterable":true 
          }
        return ( 

                <ChartContainer
                    DisplayIcons={icons}
                    Title={this.props.TITLE.SUBS.AVGVSRUN}
                    flex=" flex-100"
                >

                    <Row className="PodRow">
                        <SummaryPod label={this.props.UX.FORMS.SELECT.YEAR + " Average"} total={this.state.Series[1].data[this.state.Series[1].data.length-1]} />
                        <SummaryPod label="Highest Average " total={Math.max(...this.state.Series[1].data)} />
                        <SummaryPod label="Lowest Average " total={ Math.min(...this.state.Series[1].data)} />
                        <SummaryPod label="Innings count " total={this.state.Series[0].data.length} />
                        <SummaryPod label="Total Runs  " total={this.state.Series[0].data.reduce((a, b) => a + b, 0)} />
                        <SummaryPod label="Not Outs  " total={NotOut} /> 
                    </Row>
                    
                    <Row className="PodRow">
                            <Pod canvas="canvas1 " className="flex-100">
                                <InteractiveChart 
                                    LookUp={this.props.DATA} 
                                    Labels={this.state.Labels}
                                    series={this.state.Series} 
                                    HS={this.props.HS} 
                                    Disc="Batting"
                                    Var="RunInt"
                                />
                            </Pod>
                    </Row> 
                </ChartContainer>
        ) 
    }
}

/**
 *  Create List of teams fro given period, with games played and ave against
 *  
 */