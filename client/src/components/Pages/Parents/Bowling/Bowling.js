import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
// Sections 
import SectionRankings from "../../../Sections/Section_Discipline_Rankings";
import SectionFaBowling from "../../../Sections/Section_Fa_Bowling";
import SectionCareerBowling from "../../../Sections/Section_Career_Bowling";

export default class Batting extends Component {

  componentWillMount() { console.log(this.props.DATA) }

  render() {
    return ( 
      <Container>
        <Row> 
          <Title Title="Bowling" />
        </Row>
        
        <Row>
            <SectionRankings Rankings={this.props.DATA.CAREER.Career.Meta.Rankings.Bowling} />
        </Row>
          
            
        <Title Title="Recent Scores" />  
        <Row>
          <Pod col="col-md-12" > Recent Figures.</Pod>
         
        </Row>
        <Title Title="Career" />
        <SectionCareerBowling Data={this.props.DATA.CAREER.Career.bowling} />

        <Title Title="Achievements and Milestones" />
        <SectionFaBowling  Data={this.props.DATA.CAREER.Career.bowling}/>
       
      </Container>
    )
  }
}