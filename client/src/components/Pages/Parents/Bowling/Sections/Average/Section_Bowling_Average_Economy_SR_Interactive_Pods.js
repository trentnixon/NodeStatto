import React, { Component } from 'react';

// Template
import Row from "../../../../../Template/Page/Row";
import ChartContainer from "../../../../../Template/Page/Containers/ChartContainer";
import IconPod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Header_SingleValue_Footer";


// Actions
import {BowlingBasics, FindDataSeries} from "../../../../../../actions/UI/UI";

// Variables
const SummaryPod = (props) => (
            <IconPod 
                label={props.label}
                total={props.total}
                className="flex-30 flex-m-50"
                icon=""
                Footer = {"for "+props.footer}
            /> 
);

// Start Class 
export default class Section_Default extends Component {

    state = {  Series:[], }

    // Create Data Series
    createSeries(DATA, Neddle){  
          this.setState({  Series:BowlingBasics(FindDataSeries(DATA,Neddle)), Year:Neddle, })
    }

   componentWillMount() { 
       this.createSeries(this.props.DATA,this.props.UX.FORMS.SELECT.YEAR);
    } 
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(this.props.UX.FORMS.SELECT.YEAR !== nextProps.UX.FORMS.SELECT.YEAR)
        { this.createSeries(this.props.DATA,nextProps.UX.FORMS.SELECT.YEAR) }
    } 
    render() { 
        const icons= {
            "HasInfo":true,
            "Info":this.props.TITLE.DESC.TODO,
            "Interactive":true,
            "Filterable":true 
          }
        return ( 

                <ChartContainer
                    DisplayIcons={icons}
                    Title=""
                    flex=" flex-100"
                > 
                    
                    <Row className="PodRow">

                        <SummaryPod label={"Average"} footer={this.props.UX.FORMS.SELECT.YEAR } total={this.state.Series[11]} />
                        <SummaryPod label={" Economy " } footer={this.props.UX.FORMS.SELECT.YEAR } total={this.state.Series[7]} />
                        <SummaryPod label={" Strike Rate "} footer={this.props.UX.FORMS.SELECT.YEAR } total={this.state.Series[9]} />
                        <SummaryPod label={"Wickets "} footer={this.props.UX.FORMS.SELECT.YEAR } total={this.state.Series[2]} />
                        <SummaryPod label={"Overs Bowled "} footer={this.props.UX.FORMS.SELECT.YEAR } total={this.state.Series[4]} />
                        <SummaryPod label={"Runs Conceded "} footer={this.props.UX.FORMS.SELECT.YEAR } total={this.state.Series[6]} />

                    </Row>
        
                </ChartContainer> 
           
        ) 
    }
}

/**
 *  Create List of teams fro given period, with games played and ave against
 *  
 */