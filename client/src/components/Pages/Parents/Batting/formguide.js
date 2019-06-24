import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
// import PageHeader from "../../../Template/Page/Header"
// Sections
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionP from "../../../Elements/type/PageParagraph";
import SectionContainer from "../../../Sections/global/SectionContainer";
import SectionCareerBatting from "../../../Sections/batting/Section_FormGuide_AtAGlance_Batting";
import SectionMilestonesBatting from "../../../Sections/batting/Section_Career_Milestones_Batting";
import SectionBattingrecentScores from "../../../Sections/batting/Section_Batting_recentScores";

export default class Page_Batting_Formguide
 extends Component {

  componentWillMount() {} 

  render() { 
 
    return ( 
          <Container>
            <SectionHeader   h1={this.props.TITLES.FORMGUIDE} h2={this.props.TITLES.BATTING} /> 
            <SectionP Copy={this.props.DESC.FORMGUIDE}/>
     
              <SectionContainer class="Section_Batting_FormGuide todo">
                <SectionCareerBatting 
                  Data={this.props.DATA.CAREER.Form.batting} 
                  Career={this.props.DATA.CAREER.Career}
                  Title=""
                  SubTitle=""
                  {... this.props}
                /> 
            </SectionContainer> 


            <SectionContainer class="Section_Batting_FormGuide todo">
              <SectionBattingrecentScores  
                Data={this.props.DATA.CLEAN}
                {... this.props} 
              />
            </SectionContainer>

            <SectionContainer class="Section_Batting_FormGuide todo">
              <SectionMilestonesBatting  
                Data={this.props.DATA.CAREER.Form.batting} 
                Title="Milestones and Achievements"
                {... this.props}
              />
            </SectionContainer>

          </Container>
    )
  }
}