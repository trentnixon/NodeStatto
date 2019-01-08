import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";

// Sections 
import SectionContainer from "../../../Sections/global/SectionContainer";
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionRankings from "../../../Sections/global/Section_Discipline_Rankings";
import SectionFaBowling from "../../../Sections/bowling/Section_Fa_Bowling";
import SectionCareerBowling from "../../../Sections/bowling/Section_Career_Bowling";

export default class Batting extends Component {

  componentWillMount() { } 

  render() {
    return ( 
      <Container>
        <SectionHeader   h1="Bowling" h2="Career"  /> 

        <SectionContainer>
          <SectionCareerBowling 
            Data={this.props.DATA.CAREER.Career.bowling} 
            Career={this.props.DATA.CLEAN}
          />
        </SectionContainer>

        <SectionContainer>
          <SectionRankings Rankings={this.props.DATA.CAREER.Career.Meta.Rankings.Bowling} />
        </SectionContainer>
    
          
            
        <SectionContainer>
          <Pod col="col-md-12" > Recent Figures.</Pod>
        </SectionContainer>
          
         
       
        
        <SectionContainer>
          <SectionFaBowling  
            Data={this.props.DATA.CAREER.Career.bowling}
            Title="Milestones and Achievements"
          />
        </SectionContainer>

      </Container>
    )
  }
}