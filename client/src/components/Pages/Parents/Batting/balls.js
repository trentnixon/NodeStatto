import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

// Sections
import BallsFacedBasics from "./Sections/Section_Batting_BallsFaced_Basics";


import SectionBalls from "./Sections/Section_Batting_BallsFaced_Bar";
//import SectionRunstoBalls from "./Sections/Section_Batting_RunsToBalls"
//import SectionBallsFacedScatter from "./Sections/Section_BallsFacedOverTheYearsScatterChart";
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
          <BallsFacedBasics TITLE={TITLES.SITE} DATA={PRIMARY.CAREER.Career.batting}/>
        </SectionContainer>
        
        <SectionContainer className="Section_Batting_Runs_to_Balls todo">
          <SectionBalls DATA={PRIMARY.CAREER.Career.batting.overTheYears}  TITLES={TITLES.SITE}/>
        </SectionContainer>

      </Container> 
    )
  } 
}



/**
 * 


        <SectionContainer className="Section_Batting_Runs_to_Balls todo">
          <SectionRunstoBalls DATA={PRIMARY} TITLES={TITLES}/>
        </SectionContainer>  
 */