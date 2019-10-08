import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
// import PageHeader from "../../../Template/Page/Header"
// Sections
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionP from "../../../Elements/type/PageParagraph";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionCareerBatting from "./Sections/Section_FormGuide_AtAGlance_Batting";
import SectionMilestonesBatting from "./Sections/Section_Career_Milestones_Batting";
import SectionBattingrecentScores from "./Sections/Section_Batting_recentScores";
import SectionRunsToBalls from "./Sections/Section_Batting_FORM_Runs_Balls";

let PRIMARY, TITLES;
export default class Page_Batting_Formguide
 extends Component {

  componentWillMount() {
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
  } 
  
  render() {  
 
    return ( 
          <Container>
            <SectionHeader   h1={this.props.LABELS.SITE.TITLES.FORMGUIDE} h2={this.props.LABELS.SITE.TITLES.BATTING} /> 
            <SectionP Copy={this.props.LABELS.SITE.DESC.FORMGUIDE}/>
     
              <SectionContainer className="Section_Batting_FormGuide todo">
                <SectionCareerBatting  
                  Data={PRIMARY.CAREER.Form.batting} 
                  Career={PRIMARY.CAREER.Career}
                  TITLES={TITLES.SITE}
           
                /> 

              <SectionRunsToBalls Data={PRIMARY.CLEAN}  TITLES={TITLES.SITE}/>
            </SectionContainer> 

            <SectionContainer className="Section_Batting_FormGuide todo">
              <SectionBattingrecentScores  
                Data={PRIMARY.CLEAN}
              />
            </SectionContainer>
           
            <SectionContainer className="Section_Batting_FormGuide todo">
              <SectionMilestonesBatting   Data={PRIMARY.CAREER.Form.batting} TITLES={TITLES.SITE} />
            </SectionContainer>

          </Container>
    )
  }
}

