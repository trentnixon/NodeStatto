import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
// import PageHeader from "../../../Template/Page/Header"
// Sections
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionContainer from "../../../Sections/global/SectionContainer";
import SectionCareerBatting from "../../../Sections/batting/Section_FormGuide_AtAGlance_Batting";
import SectionMilestonesBatting from "../../../Sections/batting/Section_Career_Milestones_Batting";
import SectionBattingrecentScores from "../../../Sections/batting/Section_Batting_recentScores";

export default class Formguide
 extends Component {

  componentWillMount() {} 

  render() { 
    /**
     *    
     * <SectionCareerBatting Data={this.props.DATA.CAREER.Form.batting} />
             <PageHeader>
             /10
             </PageHeader> 
     */
    return ( 
      <div> 
       
          <Container>

            <SectionHeader   h1="Batting" h2="Form Guide (Based on last 5 Games)"  /> 

              <SectionContainer>
                <SectionCareerBatting 
                  Data={this.props.DATA.CAREER.Form.batting} 
                  Career={this.props.DATA.CAREER.Career}
                />
            </SectionContainer>


            <SectionContainer>
              <SectionBattingrecentScores  Data={this.props.DATA.CLEAN} />
            </SectionContainer>

            <SectionContainer>
              <SectionMilestonesBatting  
                Data={this.props.DATA.CAREER.Form.batting} 
                Title="Milestones and Achievements"
              />
            </SectionContainer>

          </Container>
        </div>
    )
  }
}