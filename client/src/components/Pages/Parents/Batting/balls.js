import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

// Sections

import SectionBalls from "./Sections/Section_Batting_Runs_BallsFaced";
import SectionRunstoBalls from "./Sections/Section_Batting_RunsToBalls"
import SectionBallsFacedScatter from "./Sections/Section_BallsFacedOverTheYearsScatterChart";
//import SectionRunsBar from "./Sections/Section_RunsOverTheYearsBarChart";
//import SectionRuns from "./Sections/Section_Batting_Runs_Runs";

let PRIMARY,TITLES;
export default class Page_Balls extends Component {
 
  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
  }

  render() { 
    return (     
      <Container>
        <SectionHeader   h1={TITLES.SITE.SUBS.BALLS} h2={TITLES.SITE.TITLES.BATTING}  /> 

        <SectionContainer className="Section_Batting_Runs_to_Balls todo">
          <SectionBalls DATA={PRIMARY.CAREER.Career.batting.overTheYears}  TITLES={TITLES.SITE}/>
          <SectionBallsFacedScatter TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN} HS={80}/>
       
        </SectionContainer>

        <SectionContainer className="Section_Batting_Runs_to_Balls todo">
          <SectionRunstoBalls DATA={PRIMARY} TITLES={TITLES}/>
        </SectionContainer>   
        
      </Container>
    )
  } 
}