import React, { Component } from 'react';
// Template
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

// Sections
import SectionRunsBasics from "./Sections/Section_Batting_Runs_Basics";
import SectionRuns from "./Sections/Section_Batting_Runs_Runs";
import SectionRunsScatter from "./Sections/Section_RunsOverTheYearsScatterChart";
import RunsOverYearsLineGraph from "./Sections/Section_RunsOverTheYears_LineGraph";
import RunsHeatMap from "./Sections/Section_RunstoBallsHeatmap";

// Variables
let PRIMARY,TITLES;
// Start Class
export default class Batting extends Component {

  componentWillMount() { 

    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 

  }

  render() { 
    return (     
      <Container>
        <SectionHeader   h1={this.props.LABELS.SITE.SUBS.RUNS} h2={this.props.LABELS.SITE.TITLES.BATTING}  /> 
     
        <p> Total Runs: Move Runs by year to Text(percentage as text as well) and Runs by Month to the Bar : </p>

        <SectionContainer className="Section_Batting_Runs charts todo">
          <SectionRunsBasics  TITLE={TITLES.SITE} DATA={PRIMARY.CAREER.Career.batting} />
        </SectionContainer>
        
        <SectionContainer className="Section_Batting_Runs charts todo">
          <SectionRuns  TITLE={TITLES.SITE} DATA={PRIMARY.CAREER.Career.batting} />
        </SectionContainer>
         
        <SectionContainer className="Section_Batting_Runs todo"> 
            <RunsOverYearsLineGraph 
              TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN} PRIMARY={PRIMARY}
            />
        </SectionContainer>

        <SectionContainer className="Section_Batting_Runs charts todo">
            <SectionRunsScatter TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN} HS={parseInt(PRIMARY.Meta.Batting_HS,10)} />
        </SectionContainer>
        
        <SectionContainer className="Section_Batting_Runs charts todo">
            <RunsHeatMap TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN} />
        </SectionContainer>
     
      </Container>
    )
  }
}
