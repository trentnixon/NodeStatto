import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionContainer from "../../../Sections/global/SectionContainer";

//import Title from "../../../Elements/type/PageTitle";
//import SubTitle from "../../../Elements/type/PageSubTitle";
//import Row from "../../../Template/Page/Row";
//import Pod from "../../../Template/Page/Pod";
//import PageHeader from "../../../Template/Page/Header";

// Sections

import SectionRuns from "../../../Sections/batting/Section_Batting_Runs_Runs";
import SectionNotable from "../../../Sections/batting/Section_Batting_NotableScores";
//import SectionBalls from "../../../Sections/batting/Section_Batting_Runs_BallsFaced";
import SectionRunsBar from "../../../Sections/batting/Section_RunsOverTheYearsBarChart";


export default class Batting extends Component {

  componentWillMount() { }
 
  render() { 
    return (    
      <Container>
        <SectionHeader   h1={this.props.SUBS.RUNS} h2={this.props.TITLES.BATTING}  /> 
      
        <SectionContainer class="Section_Batting_Runs charts todo">
            <SectionRuns  {... this.props} />
        </SectionContainer>

        <SectionContainer class="Section_Batting_Runs todo">
            <SectionNotable  {... this.props} />
        </SectionContainer>

        <SectionContainer class="Section_Batting_Runs todo">
          <SectionRunsBar  
            Title="Runs by Year"
            {... this.props} 
          />
        </SectionContainer> 
        
      </Container>
    )
  }
}