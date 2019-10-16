import React, { Component } from 'react';

// Template 
import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";

// Sections
import SectionMilestonesBatting from "./Sections/Section_Career_Milestones_Batting";
import SectionAchievmentsBatting from "./Sections/Section_Career_Achievments_Batting";

// Variables
let PRIMARY,TITLES;

// Start Class
export default class Page_BattingOverview extends Component {
 
  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
  }
 
  render() {   
    return (     
      <Container>  
        <SectionHeader   h1={TITLES.SITE.TITLES.MILESTONE +' & '+TITLES.SITE.TITLES.ACHIEVEMENTS} h2={TITLES.SITE.TITLES.BATTING}   /> 
        <SectionContainer className="Section_Batting_Milestones complete ">
            <SectionMilestonesBatting  Data={PRIMARY} TITLES={TITLES.SITE} />
            <SectionAchievmentsBatting  Data={PRIMARY.CAREER.Career.batting} TITLES={TITLES.SITE} />
        </SectionContainer>
      </Container>
    )
  }
}

/**
 *  NOTES: 
 *  
 *    
 */