import React, { Component } from 'react';

// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
import ChartContainer from "../../../../Template/Page/ChartContainer";
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";
// Sections
import InteractiveChart from "../../../../Charts/MixedChart";

// Form 
import SelectYear from "../../../../Elements/FormElements/FormSelect/SelectYear";
// Variables
let Series=[],Div=0, NotOut=0;

const SummaryPod = (props) => (
            <IconPod 
                label={props.label}
                total={props.total}
                className="flex-30"
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

    CreateRuns(Data, Needle){ 
        let Series=[],NewYear, RunsTotal=0;

        Data.map((game,i)=>{
            if(game.Batting){
                if(Needle === "Career"){
                    Series.push(game.Batting.RunInt) ;
                    RunsTotal = RunsTotal + game.Batting.RunInt
                }
                else{
                    NewYear = game.Meta.Date.split("/")
                    if(Needle === '20'+NewYear[2]){
                        Series.push(game.Batting.RunInt);
                        RunsTotal = RunsTotal + game.Batting.RunInt
                    }
                }
            }
            return true;
        })

        return Series;
    }

    CreateAVG(Data,Needle){
        let Series=[],NewYear;
        let TR=0; 
        Div=0;
        NotOut=0

        Data.map((game,i)=>{
            let AVG=null;
            NewYear = game.Meta.Date.split("/")
            if(game.Batting){
                if(Needle === "Career"){
                    // Redo all of this!!!
                    TR = TR + game.Batting.RunInt;
                    if(game.Batting.NotOut === 0){ Div++} else{ NotOut++}
                    AVG = TR/Div;
                    if (!isFinite(AVG.toFixed(2))){AVG=0}
                    Series.push(parseFloat(AVG.toFixed(2)))
                    //console.log(NotOut);

                }
                else if(Needle === '20'+NewYear[2]){
                        TR = TR + game.Batting.RunInt;
                        if(game.Batting.NotOut === 0){ Div++}else{ NotOut++}
                        AVG = TR/Div;
                        if (!isFinite(AVG.toFixed(2))){AVG=0}
                        Series.push(parseFloat(AVG.toFixed(2)));
                        //console.log(NotOut);
                    }
            }            
            return true;
        })
       
        return Series;
    }



    CreateDate(Data,Needle){
        let Series=[],NewYear;
        Data.map((game,i)=>{
            NewYear = game.Meta.Date.split("/")
            if(game.Batting){
                if(Needle === "Career"){ Series.push(game.Meta.Date) }
                else if(Needle === '20'+NewYear[2]){ Series.push(game.Meta.Date) }
            }
            return true;
        })
        return Series;
    }

    // Create Data Series
    createSeries(DATA, Neddle){
        Series = [{
            name: 'Runs',
            type: 'column',
            data: this.CreateRuns(DATA,Neddle)
          }, {
            name: 'Average',
            type: 'area',
            data: this.CreateAVG(DATA,Neddle)
          }];

          this.setState({ 
            Series:Series,
            Labels:this.CreateDate(this.props.DATA,Neddle),
            Year:Neddle,
        })
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
                    Interactive={true}
                    Title={this.props.TITLE.SUBS.AVGVSRUN}
                    flex=" flex-100"
                >

                    <SelectYear {... this.props}/> 
                    
                    <Row className="PodRow">
                        <h1 className="Page_Sub_Title"> Summary for : {this.props.UX.FORMS.SELECT.YEAR} </h1>

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