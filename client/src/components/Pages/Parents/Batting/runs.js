import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

// Sections
import SectionRuns from "./Sections/Section_Batting_Runs_Runs";
import SectionRunsScatter from "./Sections/Section_RunsOverTheYearsScatterChart";
import RunsOverYearsLineGraph from "./Sections/Section_RunsOverTheYears_LineGraph";

let PRIMARY,TITLES;
export default class Batting extends Component {

  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 
  }
  
  render() { 
    return (    
      <Container>
        <SectionHeader   h1={this.props.LABELS.SITE.SUBS.RUNS} h2={this.props.LABELS.SITE.TITLES.BATTING}  /> 
      
        <SectionContainer class="Section_Batting_Runs charts todo">
            <SectionRuns  TITLE={TITLES.SITE} DATA={PRIMARY.CAREER.Career.batting} />
            <SectionRunsScatter TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN} HS={parseInt(PRIMARY.Meta.Batting_HS,10)} />
        </SectionContainer>

      
        <SectionContainer class="Section_Batting_Runs todo"> 
            <RunsOverYearsLineGraph 
              TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN} PRIMARY={PRIMARY}
            />
        </SectionContainer>
      </Container>
    )
  }
}
