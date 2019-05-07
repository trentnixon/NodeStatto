import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Sections/global/Section_Global_Header";

//import Title from "../../../Elements/type/PageTitle";
//import SubTitle from "../../../Elements/type/PageSubTitle";
//import Row from "../../../Template/Page/Row";
//import Pod from "../../../Template/Page/Pod";
//import PageHeader from "../../../Template/Page/Header";

// Sections

import SectionRuns from "../../../Sections/batting/Section_Batting_Runs_Runs";
import SectionBalls from "../../../Sections/batting/Section_Batting_Runs_BallsFaced";
import SectionRunsBar from "../../../Sections/batting/Section_RunsOverTheYearsBarChart";


export default class Batting extends Component {

  componentWillMount() { }

  render() { 
    return (
      <div>      
      <Container>
        <SectionHeader   h1="Career Runs" h2="Batting"  /> 
      
        <SectionRuns {... this.props} />
        <SectionRunsBar 
          Title="Runs by Year"
          {... this.props} 
        />
        <SectionBalls {... this.props} />
        
      </Container>
      </div>
    )
  }
}