import React, { Component } from 'react';
import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import PageHeader from "../../../Template/Page/Header"
// Sections
import SectionCareerBatting from "../../../Sections/Section_Career_Batting";
import SectionMilestonesBatting from "../../../Sections/batting/Section_Career_Milestones_Batting";
import SectionBattingrecentScores from "../../../Sections/batting/Section_Batting_recentScores";

export default class Formguide
 extends Component {

  componentWillMount() {
    //console.log(this.props.DATA.CLEAN)
  } 

  render() {
    return (
      <div>
          <PageHeader>
              Anlysis and radial Chart
          </PageHeader>
          <Container>
          
            <Title Title="Form Guide" />
            <SectionCareerBatting Data={this.props.DATA.CAREER.Form.batting} />
            <SectionBattingrecentScores  Data={this.props.DATA.CLEAN} />
            <Title Title="Achievements and Milestones" />
            <SectionMilestonesBatting  Data={this.props.DATA.CAREER.Form.batting} />

          </Container>
        </div>
    )
  }
}