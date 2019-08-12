import React, { Component } from 'react';

import Title from     "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Pod from       "../../../Template/Page/Pod";

import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";

export default class Averages extends Component {

  componentWillMount() { }

  render() {
    const SITELABELS = this.props.LABELS.SITE;
    //const PRIMARY = this.props.PLAYER_DATA.Primary; 

    return (
      
      <Container>

        <SectionHeader   h1={SITELABELS.SUBS.AVG} h2={SITELABELS.TITLES.BOWLING}  /> 

        <SectionContainer class="Section_Bowling_AES todo">
        <Title Title="Average" /> 
        <Pod col="col-md-6" > Line chart of average and economy rates</Pod>
          <Pod col="col-md-6" > Average the years : Pie Chart</Pod>
          <Pod col="col-md-6" > Average : best for and against text</Pod>
          <Pod col="col-md-12" > Average over time against current: Line Chart</Pod>
        </SectionContainer>

        <SectionContainer class="Section_Bowling_AES todo">
 
          <Title Title="Economy" />

          <Pod col="col-md-6" > Economy the years : Pie Chart</Pod>
          <Pod col="col-md-6" > Economy : best for and against text</Pod>
          <Pod col="col-md-12" > Economy over time against current: Line Chart</Pod>

        </SectionContainer>
      
        <SectionContainer class="Section_Bowling_AES todo">

          <Title Title="Strike Rate" />
          <Pod col="col-md-6" > Strike Rate the years : Pie Chart</Pod>
          <Pod col="col-md-6" > Strike Rate : best for and against text</Pod>
          <Pod col="col-md-12" > Strike Rate over time against current: Line Chart</Pod>

        </SectionContainer>
            
      </Container>
    )
  }
}