import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import SubTitle from "../../../Elements/type/PageSubTitle";
import Container from "../../../Template/Page/Container";


import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
import PageHeader from "../../../Template/Page/Header";

// Sections

import SectionRuns from "../../../Sections/Section_Batting_Runs_Runs";
import SectionBalls from "../../../Sections/Section_Batting_Runs_BallsFaced";



export default class Batting extends Component {

  componentWillMount() { }

  render() {
    return (
      <div>      
      <Container>
        <Title Title="Career Runs" />
        <SubTitle Title="Include a sentence to sum up these stats.etc  *** runs  @ **" />
 

        <SectionRuns 
          {... this.props}
        />
      
        <SectionBalls {... this.props} />
        
      </Container>
      </div>
    )
  }
}