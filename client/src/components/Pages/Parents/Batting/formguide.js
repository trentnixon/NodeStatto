import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";

// Sections
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionP from "../../../Elements/type/PageParagraph";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionCareerBatting from "./Sections/Section_FormGuide_AtAGlance_Batting";
import SectionMilestonesBatting from "./Sections/Section_Career_Achievments_Batting";
import SectionBattingrecentScores from "./Sections/Section_Batting_FORM_recentScores";
import SectionRunsToBalls from "./Sections/Section_Batting_FORM_Runs_Balls";
import SectionEvaluation from "./Sections/Section_Batting_FORM_Evaluation";
import SectionFormOverTime from "./Sections/Section_Batting_FORM_OverTimeBar";


let PRIMARY, TITLES, FORMDATA;
export default class Page_Batting_Formguide
 extends Component {

  componentWillMount() {
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
  } 
    
  /**
   * 
   */
  render() {  
    FORMDATA = PRIMARY.CLEAN.slice(Math.max(PRIMARY.CLEAN.length - 5, 1)).reverse();
    return ( 
          <Container>
            <SectionHeader   h1={this.props.LABELS.SITE.TITLES.FORMGUIDE} h2={this.props.LABELS.SITE.TITLES.BATTING} /> 
            
     
            <SectionContainer className="Section_Batting_FormGuide todo">
              <SectionEvaluation 
                    FORMDATA={FORMDATA}
                    CAREER={PRIMARY.CAREER}
                    TITLES={TITLES.SITE}
              />
            </SectionContainer>

            <SectionP Copy={this.props.LABELS.SITE.DESC.FORMGUIDE}/>
            <SectionContainer className="Section_Batting_FormGuide todo">
                  <SectionCareerBatting  
                    Data={PRIMARY.CAREER.Form.batting} 
                    Career={PRIMARY.CAREER.Career}
                    TITLES={TITLES.SITE}
                    FORMDATA={FORMDATA} 
                  /> 
              </SectionContainer>

            <SectionContainer className="Section_Batting_FormGuide todo">
                <SectionFormOverTime 
                      CAREER={PRIMARY}
                      TITLES={TITLES.SITE}
                      {...this.props}
                  />
            </SectionContainer>

              <SectionContainer className="Section_Batting_FormGuide todo">
                  <SectionRunsToBalls
                    TITLES={TITLES.SITE}
                    FORMDATA={FORMDATA}
                  />
              </SectionContainer> 

              <SectionContainer className="Section_Batting_FormGuide todo">
                  <SectionBattingrecentScores  
                    FORMDATA={FORMDATA} 
                  />
              </SectionContainer>
           
              <SectionContainer className="Section_Batting_FormGuide todo">
                  <SectionMilestonesBatting   
                      Data={PRIMARY.CAREER.Form.batting} 
                      TITLES={TITLES.SITE} 
                  />
              </SectionContainer>

          </Container>
    )
  }
}

