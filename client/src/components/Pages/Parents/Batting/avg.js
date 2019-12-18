import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Global/PageContainer"; 

// Components
import MixedChartRunsAVGRanking from "./Sections/Average/Section_MixedChart_Run_Avg_Ranking";
import AverageByTeam from "./Sections/Average/Section_Average_ByTeam";

// Variables
let PRIMARY,TITLES;

export default class Formguide
 extends Component { 
   
  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 
  }

  render() {

    const Components =[
      {
        COMP:<MixedChartRunsAVGRanking TITLE={TITLES.SITE} DATA={PRIMARY.CLEAN}  HS={parseInt(PRIMARY.Meta.Batting_HS,10)}  {... this.props} />,
        CLASS:"Section_Batting_Runs charts todo"
      },{
        COMP:<AverageByTeam  TITLE={TITLES.SITE}   DATA={PRIMARY.CLEAN}  {... this.props} />,
        CLASS:"Section_Batting_Runs charts todo"
      }
    ]
    return ( <PageContaner Titles={[TITLES.SITE.SUBS.AVG,TITLES.SITE.TITLES.BATTING]} Components={Components} />)
  } 
}