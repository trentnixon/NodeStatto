import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";

// Sections 
import SectionRankings from "../../../Template/Global/Section_Discipline_Rankings";
import SectionCareerKeeping from ".Sections/Section_Career_Keeping";

export default class Batting extends Component {

  componentWillMount() { 
    //console.log(this.props.DATA.CLEAN) 
  }

  render() {
    return (
      <Container>
        <Row>
          <Title Title="Keeping" /> 
        </Row>
        <Row>
            <SectionRankings 
                Rankings={this.props.DATA.CAREER.Career.Meta.Rankings.Keeping}
            />
        </Row>

        <SectionCareerKeeping Data={this.props.DATA.CAREER.Career.Keeping} />

      </Container>
    )
  }
}