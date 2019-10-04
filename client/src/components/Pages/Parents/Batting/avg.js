import React, { Component } from 'react';

// Template
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";
// Sections
import MixedChartRunsAVGRanking from "./Sections/Section_MixedChart_Run_Avg_Ranking";
import AverageByTeam from "./Sections/Section_Average_ByTeam";
// Variables
let PRIMARY,TITLES;
export default class Formguide
 extends Component {

  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 
  }

  render() {
    return (
      <Container>
          <SectionHeader   h1={this.props.LABELS.SITE.SUBS.AVG} h2={this.props.LABELS.SITE.TITLES.BATTING}  /> 
               
        <SectionContainer className="Section_Batting_Runs charts todo">
          <MixedChartRunsAVGRanking 
              TITLE={TITLES.SITE} 
              DATA={PRIMARY.CLEAN} 
              HS={parseInt(PRIMARY.Meta.Batting_HS,10)} 
              {... this.props}
            />
        </SectionContainer>  

        <SectionContainer className="Section_Batting_Runs charts todo">
          <AverageByTeam 
            TITLE={TITLES.SITE} 
            DATA={PRIMARY.CLEAN} 
      
            {... this.props}
          />

        </SectionContainer>
        </Container>
    )
  } 
}