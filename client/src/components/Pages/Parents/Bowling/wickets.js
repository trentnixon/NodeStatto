import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";

// Sections
import BowlingWicketsTextBasics from "./Sections/Section_Bowling_Wickets_Basics";
import WicketsByMonth from "./Sections/Section_Bowling_Wickets_BarByMonthOverYear";


import InteractiveWicketsOverYears from "./Sections/Section_Bowling_Wickets_OverRuns_By_Oppo";
import SectionWicketsOverTheYearsLineGraph from "./Sections/Section_WicketsOverTheYears_LineGraph";

export default class Batting extends Component {

  componentWillMount() {}
  
  render() {
 
    const SITELABELS = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary;
    
    return ( 
      <Container> 
        <SectionHeader   h1={SITELABELS.SUBS.WICKETS} h2={SITELABELS.TITLES.BOWLING}  /> 
          
          <SectionContainer  className="Section_Bowling_Wickets Compelete"> 
             <BowlingWicketsTextBasics TITLE={SITELABELS} DATA={PRIMARY.CAREER.Career.bowling} />
          </SectionContainer>

          <SectionContainer  className="Section_Bowling_Wickets Compelete">
            <WicketsByMonth   TITLE={SITELABELS} DATA={PRIMARY.CAREER.Career.bowling}  PathOpt={this.props.DATA_SETUP} />
          </SectionContainer>

          <SectionContainer  className="Section_Bowling_Wickets Compelete">
            <SectionWicketsOverTheYearsLineGraph TITLE={SITELABELS} DATA={PRIMARY.CLEAN} PRIMARY={PRIMARY}/>
          </SectionContainer>

          <SectionContainer className="Section_Bowling_Wickets complete">
            <InteractiveWicketsOverYears DATA={PRIMARY} TITLE={SITELABELS} {... this.props}/>
          </SectionContainer>
    </Container> 
    )
  }
}