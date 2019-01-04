import React, { Component } from 'react';
import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import PageHeader from "../../../Template/Page/Header"

// Section 
import SectionCareerBowling from "../../../Sections/Section_Career_Bowling";
import SectionFaBowling from "../../../Sections/Section_Fa_Bowling";
import SectionRecentFigures from "../../../Sections/Section_Bowling_recentFigures";
export default class Formguide
 extends Component {

  componentWillMount() {
    console.log(this.props.DATA.CLEAN)
  }

  render() {
    return (
      <div>
            <PageHeader>
                Anlysis and radial Chart
            </PageHeader>
            <Container> 
              <Title Title="Form Guide" />
              <SectionCareerBowling Data={this.props.DATA.CAREER.Form.bowling} />
              <SectionRecentFigures Data={this.props.DATA.CLEAN} />
              <Title Title="Achievements and Milestones" />
              <SectionFaBowling  Data={this.props.DATA.CAREER.Form.bowling}/> 
            </Container>
        </div>
    )
  }
}