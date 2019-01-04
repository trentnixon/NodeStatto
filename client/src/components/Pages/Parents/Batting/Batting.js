import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";

// Sections 
import SectionContainer from "../../../Sections/SectionContainer";
import SectionHeader from "../../../Sections/Section_Global_Header";

import SectionRankings from "../../../Sections/Section_Discipline_Rankings";
import SectionCareerBatting from "../../../Sections/Section_Career_Batting";
import SectionMilestonesBatting from "../../../Sections/batting/Section_Career_Milestones_Batting";
 

export default class Batting extends Component {

  componentWillMount() { }

  render() {
    return (  
      <Container> 

        <SectionHeader   h1="Batting" h2="Career"  />

        <SectionContainer>
          <SectionCareerBatting 
            Data={this.props.DATA.CAREER.Career.batting}  
            Career={this.props.DATA.CLEAN}
          />
        </SectionContainer>

        <SectionContainer>
          <SectionRankings  
            Rankings={this.props.DATA.CAREER.Career.Meta.Rankings.Batting}
            Title="Batting Rankings"
            SubTitle="Breakdown of the batting rankings over the career"
          />
        </SectionContainer>
        
        <SectionContainer>
          <SectionMilestonesBatting  
            Data={this.props.DATA.CAREER.Career.batting} 
            Title="Milestones and Achievements"
          />
        </SectionContainer>


      </Container>
    )
  }
}