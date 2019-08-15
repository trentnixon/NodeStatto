import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
// Sections 
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import BasicStatOverview from "./Sections/Section_Batting_Overview_BasicStats";
import SectionRuns from "./Sections/Section_Batting_Runs_Runs";

let PRIMARY,TITLES;
export default class Page_BattingOverview extends Component {
 
  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
  }

  render() {  
    return (     
      <Container>  
        <SectionHeader   h1={TITLES.SITE.TITLES.OVERVIEW} h2={TITLES.SITE.TITLES.BATTING}   /> 

        <SectionContainer class="Section_Batting_Rankings complete">
          <BasicStatOverview  
                      SUBS={TITLES.SITE.SUBS}
                      CTA={TITLES.SITE.CTA}
                      TITLES = {TITLES.SITE.TITLES}
                      DATA={PRIMARY}
                    />  

          <SectionRuns  TITLE={TITLES.SITE} DATA={PRIMARY.CAREER.Career.batting} />
        </SectionContainer>

      </Container>
    )
  }
}

/**
 *  NOTES: 
 * 
 *    
 */