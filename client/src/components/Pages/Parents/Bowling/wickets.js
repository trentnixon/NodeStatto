import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Sections/global/SectionContainer";
import SectionHeader from "../../../Sections/global/Section_Global_Header";

import WicketsOverTheYears from "../../../Sections/bowling/Section_Bowling_Wickets_OverTheYears";
import InteractiveWicketsOverYears from "../../../Elements/InteractiveCharts/BarChart_WicketsOverTheYears";


export default class Batting extends Component {

  componentWillMount() { }

  render() {
    return ( 
      <Container>
        <SectionHeader   h1={this.props.SUBS.WICKETS} h2={this.props.TITLES.BOWLING}  /> 

        <SectionContainer  class="Section_Bowling_Wickets todo"> 
          <WicketsOverTheYears 
            {... this.props} 
          />
      
        </SectionContainer>
          
        <SectionContainer class="Section_Bowling_Wickets todo">
          <Title Title="Notable Bowling Performaces : Interactive List" />
        </SectionContainer>

        <SectionContainer class="Section_Bowling_Wickets todo">
          <InteractiveWicketsOverYears {... this.props} />
        </SectionContainer>
        
    </Container> 
    )
  }
} 