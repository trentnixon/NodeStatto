import React, { Component } from 'react';

// Template
import Row from "../../../Template/Page/Row";
import Container from "../../../Template/Page/Container";
import ChartContainer from "../../../Template/Page/ChartContainer";
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

    console.log(TITLES);
    return (
            <Container>
              <SectionHeader h1={TITLES.SITE.TITLES.TEAMS} h2={TITLES.SITE.CTA.FULL} /> 
              <SectionContainer className="Section_Overview complete" > 
              
              <Row className="PodRow HomeCharts">
                <ChartContainer
                              flex="flex-100"
                              Info={TITLES.SITE.DESC.TEAMSPLAYEDFOR}
                              Interactive={false}
                >
                  <PlayedFor 
                      TITLES={TITLES.SITE.TITLES}
                      CTA={TITLES.SITE.CTA}
                      SUBS={TITLES.SITE.SUBS}
                      DATA={PRIMARY.CLEAN}
                      num={null} 
                      className="flex-100"
                  /> 
                  </ChartContainer>
                </Row> 
              </SectionContainer>
          </Container>

    )
  }
}         