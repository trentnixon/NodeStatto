import React, { Component } from 'react';

// import Row from "../../../Template/Page/Row";
import Pod from "../../../Elements/pods/Pod_Outer_Wrapper";
import Title from     "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

// Sections 
import MixedChartEcoRuns from "./Sections/Section_MixedChart_Economy_RunsConceded";


export default class Averages extends Component {

  componentWillMount() { } 

  render() {
    const TITLES = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary; 

    return (
      
      <Container>
 
        <SectionHeader   h1={TITLES.SUBS.AVG} h2={TITLES.TITLES.BOWLING}  /> 

        <SectionContainer className="Section_Batting_Runs charts todo">
            <Title Title="Overview" />
            <MixedChartEcoRuns TITLE={TITLES} DATA={PRIMARY.CLEAN} />
          </SectionContainer>

        <SectionContainer className="Section_Bowling_AES todo">
            <Title Title="Average" /> 
            <Pod className="flex-100" > Line chart of average and economy rates</Pod>
            <Pod className="flex-100" > Average the years : Pie Chart</Pod>
            <Pod className="flex-100"> Average : best for and against text</Pod>
            <Pod className="flex-100"  > Average over time against current: Line Chart</Pod>
        </SectionContainer>

        <SectionContainer className="Section_Bowling_AES todo">

          <Title Title="Economy" />
          <Pod  className="flex-100"> Economy the years : Pie Chart</Pod>
          <Pod  className="flex-100"> Economy : best for and against text</Pod>
          <Pod  className="flex-100"> Economy over time against current: Line Chart</Pod>

        </SectionContainer>
      
       

        <SectionContainer className="Section_Bowling_AES todo">

          <Title Title="Strike Rate" />
          <Pod className="flex-100" > Strike Rate the years : Pie Chart</Pod>
          <Pod className="flex-100" > Strike Rate : best for and against text</Pod>
          <Pod cclassName="flex-100" > Strike Rate over time against current: Line Chart</Pod>

        </SectionContainer>
            
      </Container>
    )
  }
}