import React, { Component } from 'react';

// Template
import Row from "../../../Template/Page/Row";
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

// Sections
import PlayedFor from "../../../Elements/Tables/PlayedForList";

// Variables
let TITLES,PRIMARY;
// Start Class
export default class Statto extends Component {

  componentWillMount() { }

  render() {
    TITLES = this.props.LABELS ;
    PRIMARY = this.props.PLAYER_DATA.Primary;
    return (
            <Container>
              <SectionHeader h1={TITLES.SITE.TITLES.TEAMS} h2={TITLES.SITE.CTA.FULL} /> 
              <SectionContainer className="Section_Overview complete" > 
               
              <Row className="PodRow HomeCharts">
                  <PlayedFor 
                      TITLES={TITLES.SITE.TITLES}
                      CTA={TITLES.SITE.CTA}
                      SUBS={TITLES.SITE.SUBS}
                      DATA={PRIMARY.CLEAN}
                      num={null}
                  /> 
                </Row> 
              </SectionContainer>
          </Container>

    )
  }
}         