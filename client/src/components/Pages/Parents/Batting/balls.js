import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Page/Containers/PageContainer";

// Sections
import BallsFacedBasics from "./Sections/ByTheBall/Section_Batting_BallsFaced_Basics";
import SectionBalls from "./Sections/ByTheBall/Section_Batting_BallsFaced_Bar";

// LEGACY
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
    const Components =[
      {
        COMP:<BallsFacedBasics TITLE={TITLES.SITE} DATA={PRIMARY.CAREER.Batting}/> ,
        CLASS:"Section_Batting_Runs_to_Balls  todo"
      },
      {
        COMP:<SectionBalls DATA={PRIMARY.CAREER.Batting.overTheYears}  TITLES={TITLES.SITE}/>,
        CLASS:"Section_Batting_Runs_to_Balls  todo"
      }
    ]

    return (     
      <PageContaner Titles={[TITLES.SITE.SUBS.BALLS,TITLES.SITE.TITLES.BATTING]} Components={Components} />
    )
  } 
}