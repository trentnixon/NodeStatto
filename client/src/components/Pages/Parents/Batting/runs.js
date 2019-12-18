import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Global/PageContainer";

// Sections 
import SectionRunsBasics from "./Sections/Runs/Section_Batting_Runs_Basics";
import SectionRuns from "./Sections/Runs/Section_Batting_Runs_Runs";
import RunsOverYearsLineGraph from "./Sections/Runs/Section_RunsOverTheYears_LineGraph";

// Variables
let PRIMARY,TITLES;
// Start Class
export default class Batting extends Component {

  componentWillMount() { 
    TITLES = this.props.LABELS.SITE
    PRIMARY = this.props.PLAYER_DATA.Primary; 
  }
  
  render() { 

    const Components =[
      {
        COMP:<SectionRunsBasics  TITLE={TITLES} DATA={PRIMARY.CAREER.Career.batting} />,
        CLASS:"Section_Batting_Runs charts todo"
      },{
        COMP:<RunsOverYearsLineGraph TITLE={TITLES} DATA={PRIMARY.CLEAN} PRIMARY={PRIMARY} />,
        CLASS:"Section_Batting_Runs charts todo"
      },{
        COMP:<SectionRuns  TITLE={TITLES} DATA={PRIMARY.CAREER.Career.batting}  PathOpt={this.props.DATA_SETUP}/>,
        CLASS:"Section_Batting_Runs charts todo"
      }
    ]
    return (    
      <PageContaner Titles={[TITLES.SUBS.RUNS,TITLES.TITLES.BATTING]} Components={Components} /> 
    )
  }
}


/**
 * 
 * 
 * 
 
 import RunsHeatMap from "./Sections/Runs/Section_RunstoBallsHeatmap";
 import SectionRunsScatter from "./Sections/Runs/Section_RunsOverTheYearsScatterChart";

 * {
        COMP: <SectionRunsScatter TITLE={TITLES} DATA={PRIMARY.CLEAN} HS={parseInt(PRIMARY.Meta.Batting_HS,10)} />,
        CLASS:"Section_Batting_Runs charts todo"
      },{
        COMP: <RunsHeatMap TITLE={TITLES} DATA={PRIMARY.CLEAN} />,
        CLASS:"Section_Batting_Runs charts todo"
      }
 */