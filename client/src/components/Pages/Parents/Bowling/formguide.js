import React, { Component } from 'react';
//import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
//import PageHeader from "../../../Template/Page/Header"

// Section 
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionP from "../../../Elements/type/PageParagraph";
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
     * <PageHeader> 
          Current form /10
        </PageHeader>    
     */
    return (
      <div>
            <Container> 
              <SectionHeader 
                h1={this.props.TITLES.FORMGUIDE} h2={this.props.TITLES.BOWLING}  
              /> 
              <SectionP Copy={this.props.DESC.FORMGUIDE}/>
              
              <SectionContainer class="Section_Bowling_FormGuide todo">
                <SectionCareerBowling 
                  Data={this.props.DATA.CAREER.Form.bowling} 
                  Career={this.props.DATA.CAREER.Career}
                  {... this.props}
                />
             </SectionContainer>
              <SectionContainer>
                <SectionRecentFigures 
                  Data={this.props.DATA.CLEAN} 
                  {... this.props}
                />
              </SectionContainer>
              
              <SectionContainer>
                <SectionFaBowling  
                    Data={this.props.DATA.CAREER.Form.bowling}
                    Title="Milestones and Achievements"
                    {... this.props}
                />
              </SectionContainer>

            </Container>
        </div>
    )
  }
}