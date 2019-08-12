import React, { Component } from 'react';
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
// Sections
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";
// Sections
import PlayedFor from "../../../Elements/Tables/PlayedForList";

let TITLES,PRIMARY;
export default class Statto extends Component {

  componentWillMount() { }

  render() {
    TITLES = this.props.LABELS ;
    PRIMARY = this.props.PLAYER_DATA.Primary;
    return (
            <Container>
              <SectionHeader h1={TITLES.SITE.TITLES.TEAMS} h2={TITLES.SITE.CTA.FULL} /> 
              <SectionContainer class="Section_Overview complete" > 
               
              <Row class="PodRow HomeCharts">
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