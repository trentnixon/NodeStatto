import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";

// Sections
import Bowling_Wickets_Text_Basics from "./Sections/Section_Bowling_Wickets_Basics";
import WicketsByMonth from "./Sections/Section_Bowling_Wickets_BarByMonthOverYear";



import InteractiveWicketsOverYears from "../../../Elements/InteractiveCharts/BarChart_WicketsOverTheYears";
import Section_WicketsOverTheYears_LineGraph from "./Sections/Section_WicketsOverTheYears_LineGraph";

export default class Batting extends Component {

  componentWillMount() {}
  // arrSum = arr => arr.reduce((a,b) => a + b, 0)
  render() {

    const SITELABELS = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary;
    
    return ( 
      <Container> 
        <SectionHeader   h1={SITELABELS.SUBS.WICKETS} h2={SITELABELS.TITLES.BOWLING}  /> 
         
          <SectionContainer  className="Section_Bowling_Wickets Compelete"> 
             <Bowling_Wickets_Text_Basics TITLE={SITELABELS} DATA={PRIMARY.CAREER.Career.bowling} />
          </SectionContainer>

          <SectionContainer  className="Section_Bowling_Wickets Compelete">
            <WicketsByMonth   TITLE={SITELABELS} DATA={PRIMARY.CAREER.Career.bowling}  PathOpt={this.props.DATA_SETUP} />
          </SectionContainer>

          <SectionContainer  className="Section_Bowling_Wickets Compelete">
            <Section_WicketsOverTheYears_LineGraph TITLE={SITELABELS} DATA={PRIMARY.CLEAN} PRIMARY={PRIMARY}/>
          </SectionContainer>

          <SectionContainer className="Section_Bowling_Wickets complete">
            <InteractiveWicketsOverYears DATA={PRIMARY}  />
          </SectionContainer>
    </Container> 
    )
  }
}

/**
 *  Notes
 */