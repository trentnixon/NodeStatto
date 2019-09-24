import React, { Component } from 'react';
// Template
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

// Sections
import SectionRunsScatter from "./Sections/Section_RunsOverTheYearsScatterChart";
import RunsOverYearsLineGraph from "./Sections/Section_RunsOverTheYears_LineGraph";
import RunsHeatMap from "./Sections/Section_RunstoBallsHeatmap";
import MixedChartRunsAVGRanking from "./Sections/Section_MixedChart_Run_Avg_Ranking";

// Variables
let PRIMARY,TITLES;
// Start Class
export default class Batting extends Component {

  componentWillMount() { 

    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 

    let RACE = [0];
    console.log(PRIMARY.CAREER.Career.batting.overTheYears);

    PRIMARY.CAREER.Career.batting.overTheYears.map((runs,i)=>{
      console.log(runs.TotalRuns,RACE,RACE.length,RACE[RACE.length]) ;

      RACE.push(runs.TotalRuns+RACE[RACE.length-1])

    }) 
    console.log(RACE);
  }

  render() { 
    return (    
      <Container>
        <SectionHeader   h1={this.props.LABELS.SITE.SUBS.RUNS} h2={this.props.LABELS.SITE.TITLES.BATTING}  /> 
        
        <SectionContainer className="Section_Batting_Runs charts todo">
            <MixedChartRunsAVGRanking TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN} HS={parseInt(PRIMARY.Meta.Batting_HS,10)} />
        </SectionContainer> 

        <SectionContainer className="Section_Batting_Runs charts todo">
            <SectionRunsScatter TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN} HS={parseInt(PRIMARY.Meta.Batting_HS,10)} />
        </SectionContainer>
        
        <SectionContainer className="Section_Batting_Runs charts todo">
            <RunsHeatMap TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN} />
        </SectionContainer>
      
        <SectionContainer className="Section_Batting_Runs todo"> 
            <RunsOverYearsLineGraph 
              TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN} PRIMARY={PRIMARY}
            />
        </SectionContainer>
      </Container>
    )
  }
}
