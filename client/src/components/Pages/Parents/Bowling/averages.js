import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

// Sections 
import MixedChartEcoRuns from "./Sections/Section_MixedChart_Economy_RunsConceded";
import InteractivePods from "./Sections/Section_Bowling_Average_Economy_SR_Interactive_Pods";

export default class Averages extends Component {

  componentWillMount() { } 

  render() {
    const TITLES = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary; 

    return (
      <Container>
 
          <SectionHeader   h1={TITLES.SUBS.AVG + ', ' + this.props.LABELS.SITE.SUBS.ECO + ', ' + this.props.LABELS.SITE.SUBS.SR} h2={TITLES.TITLES.BOWLING}  /> 

          <SectionContainer className="Section_Batting_Runs charts todo">
              <InteractivePods TITLE={TITLES} DATA={PRIMARY.CLEAN} {... this.props} />
          </SectionContainer>  

          <SectionContainer className="Section_Batting_Runs charts todo">
            <MixedChartEcoRuns TITLE={TITLES} DATA={PRIMARY.CLEAN}  {... this.props}/>
          </SectionContainer>
             
      </Container>
    )
  }
} 