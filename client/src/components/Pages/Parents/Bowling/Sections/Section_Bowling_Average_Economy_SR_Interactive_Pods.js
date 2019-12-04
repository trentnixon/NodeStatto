import React, { Component } from 'react';

// Template
import Row from "../../../../Template/Page/Row";
import ChartContainer from "../../../../Template/Page/ChartContainer";
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";


// Actions
import {BowlingBasics, FindDataSeries} from "../../../../../actions/UI";

// Variables
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

    state = {  Series:[], }

    // Create Data Series
    createSeries(DATA, Neddle){  
          this.setState({  Series:BowlingBasics(FindDataSeries(DATA,Neddle)), Year:Neddle, })
    }

   componentWillMount() { 
       this.createSeries(this.props.DATA,this.props.UX.FORMS.SELECT.YEAR) 
       
    } 
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(this.props.UX.FORMS.SELECT.YEAR !== nextProps.UX.FORMS.SELECT.YEAR)
        { this.createSeries(this.props.DATA,nextProps.UX.FORMS.SELECT.YEAR) }
   
    }
    render() {
        return ( 

                <ChartContainer
                    Info={this.props.TITLE.DESC.TODO}
                    Interactive={false}
                    Title=""
                    flex=" flex-100"
                > 
                    
                    <Row className="PodRow">
                        <h1 className="Page_Sub_Title"> Summary for : {this.props.UX.FORMS.SELECT.YEAR} </h1>

                        <SummaryPod label={" Average"} total={this.state.Series[11]} />
                        <SummaryPod label={" Economy"} total={this.state.Series[7]} />
                        <SummaryPod label={" Strike Rate"} total={this.state.Series[9]} />
                        <SummaryPod label={"Wickets"} total={this.state.Series[2]} />
                        <SummaryPod label={"Overs Bowled"} total={this.state.Series[4]} />
                        <SummaryPod label={"Runs Conceded"} total={this.state.Series[6]} />

                    </Row>
        
                </ChartContainer>
           
        ) 
    }
}

/**
 *  Create List of teams fro given period, with games played and ave against
 *  
 */