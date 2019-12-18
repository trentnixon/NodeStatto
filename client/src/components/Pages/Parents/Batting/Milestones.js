import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Global/PageContainer";

// Sections
import SectionMilestonesBatting from "./Sections/Milestones/Section_Career_Milestones_Batting";
import SectionAchievmentsBatting from "./Sections/Form/Section_Career_Achievments_Batting";
 
// Variables
let PRIMARY,TITLES;

// Start Class
export default class Page_BattingOverview extends Component {
 
  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
  }
 
  render() {   

    const Components =[
      {
        COMP:<SectionMilestonesBatting  Data={PRIMARY} TITLES={TITLES.SITE} /> ,
        CLASS:"Section_Batting_Runs_to_Balls  todo"
      },
      {
        COMP:<SectionAchievmentsBatting  Data={PRIMARY.CAREER.Career.batting} TITLES={TITLES.SITE} />,
        CLASS:"Section_Batting_Runs_to_Balls  todo"
      }
    ]

    return (<PageContaner Titles={[TITLES.SITE.TITLES.MILESTONE +' & '+TITLES.SITE.TITLES.ACHIEVEMENTS,TITLES.SITE.TITLES.BATTING]} Components={Components} /> )
  }
}