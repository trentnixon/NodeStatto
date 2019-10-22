import React, { Component } from 'react';

// Template
import Container from "../../../Template/Page/Container";

// Sections
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionBowlingMilestones from "./Sections/Section_Fa_Bowling_MIlestones";
import SectionFaBowling from "./Sections/Section_Fa_Bowling";

// Start Class
export default class BowlingHome extends Component {

  componentWillMount() { } 
 
  render() {
    const SITELABELS = this.props.LABELS.SITE; 
    const PRIMARY = this.props.PLAYER_DATA.Primary;

    return ( 
      <Container>
        <SectionHeader h1={SITELABELS.TITLES.MILESTONE} h2={SITELABELS.TITLES.BOWLING} /> 
        
        
        <SectionContainer>
          <SectionBowlingMilestones  
            DATA={PRIMARY.CAREER.Career.bowling}
            TITLE={SITELABELS.TITLES.MILESTONE}
            {... this.props} 
          /> 
        </SectionContainer>

        <SectionContainer>
          <SectionFaBowling  
            Data={PRIMARY.CAREER.Career.bowling}
            TITLE={SITELABELS.TITLES.ACHIEVEMENTS}
            {... this.props} 
          /> 
        </SectionContainer>
      
      </Container> 
    )
  }
}