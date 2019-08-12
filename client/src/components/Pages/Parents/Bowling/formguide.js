import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";

// Section 
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionP from "../../../Elements/type/PageParagraph";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionCareerBowling from "./Sections/Section_FormGuide_AtAGlance_Bowling";
import SectionFaBowling from "./Sections/Section_Fa_Bowling";
import SectionRecentFigures from "./Sections/Section_Bowling_recentFigures";
export default class Formguide
 extends Component {

  componentWillMount() {}

  render() {

    const SITELABELS = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary;
    return (
      <div>
            <Container> 
              <SectionHeader 
                h1={SITELABELS.TITLES.FORMGUIDE} h2={SITELABELS.TITLES.BOWLING}  
              /> 
              <SectionP Copy={SITELABELS.DESC.FORMGUIDE}/>
              
              <SectionContainer class="Section_Bowling_FormGuide todo">
                <SectionCareerBowling 
                        Data={PRIMARY.CAREER.Form.bowling} 
                        Career={PRIMARY.CAREER.Career}
                  {... this.props}
                />
             </SectionContainer>
             <SectionContainer class="Section_Bowling_FormGuide todo">
                <SectionRecentFigures 
                  Data={PRIMARY.CLEAN} 
                  {... this.props}
                />
              </SectionContainer>

              <SectionContainer  class="Section_Bowling_FormGuide todo">
                <SectionFaBowling  
                    Data={PRIMARY.CAREER.Form.bowling}
                    Title="Milestones and Achievements"
                    {... this.props}
                />
              </SectionContainer>
            </Container>
        </div>
    )
  }
}