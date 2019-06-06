import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";

import SectionContainer from "../../../Sections/global/SectionContainer";
import SectionHeader from "../../../Sections/global/Section_Global_Header";
export default class Averages extends Component {

  componentWillMount() { 
      //console.log(this.props.DATA.CLEAN) 
    }

  render() {
    return (
      
      <Container>

        <SectionHeader   h1={this.props.SUBS.AVG} h2={this.props.TITLES.BOWLING}  /> 

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