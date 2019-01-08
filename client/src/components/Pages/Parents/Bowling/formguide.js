import React, { Component } from 'react';
import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import PageHeader from "../../../Template/Page/Header"

// Section 
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionContainer from "../../../Sections/global/SectionContainer";
import SectionCareerBowling from "../../../Sections/bowling/Section_FormGuide_AtAGlance_Bowling";
import SectionFaBowling from "../../../Sections/bowling/Section_Fa_Bowling";
import SectionRecentFigures from "../../../Sections/bowling/Section_Bowling_recentFigures";
export default class Formguide
 extends Component {

  componentWillMount() {}

  render() {

    /**
     * 
              
              
             
     */
    return (
      <div>
            <PageHeader> 
                Current form */10
            </PageHeader>
            <Container> 
              <SectionHeader   h1="Bowling" h2="Form Guide (Based on last 10 Games)"  /> 
             
              <SectionContainer>
                <SectionCareerBowling 
                  Data={this.props.DATA.CAREER.Form.bowling} 
                  Career={this.props.DATA.CAREER.Career}
                />
             </SectionContainer>
              <SectionContainer>
                <SectionRecentFigures Data={this.props.DATA.CLEAN} />
              </SectionContainer>
              
              <SectionContainer>
                <SectionFaBowling  
                    Data={this.props.DATA.CAREER.Form.bowling}
                    Title="Milestones and Achievements"
                />
              </SectionContainer>
              
            </Container>
        </div>
    )
  }
}