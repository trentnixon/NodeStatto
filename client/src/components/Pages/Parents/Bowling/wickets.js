import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";

import WicketsOverTheYears from "./Sections/Section_Bowling_Wickets_OverTheYears";
import InteractiveWicketsOverYears from "../../../Elements/InteractiveCharts/BarChart_WicketsOverTheYears";


export default class Batting extends Component {

  componentWillMount() { }

  render() {

    const SITELABELS = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary;
    return ( 
      <Container> 
        <SectionHeader   h1={SITELABELS.SUBS.WICKETS} h2={SITELABELS.TITLES.BOWLING}  /> 
        <SectionContainer  className="Section_Bowling_Wickets todo"> 
          <WicketsOverTheYears  Data={PRIMARY.CAREER.Career.bowling.overTheYears} />
        </SectionContainer>


        <SectionContainer className="Section_Bowling_Wickets todo">
          <InteractiveWicketsOverYears DATA={PRIMARY}  />
        </SectionContainer>
    </Container> 
    )
  }
}

/**
 *  Notes
 */