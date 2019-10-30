import React, { Component } from 'react';

// Icons
import {Bowling} from "../../../Icons/icons";
import PeopleIcon from '@material-ui/icons/People';

// Template
import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionCareerBowling from "./Sections/Section_Career_Bowling";
import SectionForandAgainst from "../../../Elements/Tables/MostForAgainstBowling";
import WicketsOverTheYears from "./Sections/Section_Bowling_Wickets_OverTheYears";
// Sections 
import Tabber from "../../../Template/Tabber/TabContaner";
import BasicStatOverview from "./Sections/Section_Bowling_Overview_BasicStats";
import SectionRankingOverview from "./Sections/Section_Bowling_Overview_Rankings";


// eslint-disable-next-line
let PRIMARY,TITLES;
export default class BowlingHome extends Component { 

  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
  } 
 
  render() {
    const SITELABELS = this.props.LABELS.SITE; 
    const PRIMARY = this.props.PLAYER_DATA.Primary;

    return ( 
      <Container>
        <SectionHeader   h2={SITELABELS.TITLES.OVERVIEW} h1={SITELABELS.TITLES.BOWLING} /> 
        
        <SectionContainer className="Section_Bowling_Rankings complete">
            <BasicStatOverview   
                      SUBS={TITLES.SITE.SUBS}
                      CTA={TITLES.SITE.CTA} 
                      TITLES = {TITLES.SITE.TITLES}
                      DATA={PRIMARY}
              />   
        </SectionContainer>
       
        <SectionContainer className="Section_Batting_Rankings complete">
            <SectionRankingOverview 
              SUBS={TITLES.SITE.SUBS} 
              CTA={TITLES.SITE.CTA}
              TITLES = {TITLES.SITE.TITLES}
              DATA={PRIMARY}
            />
  
        </SectionContainer>

        <SectionContainer className="Section_Bowling_Wickets complete">
            <WicketsOverTheYears  Data={PRIMARY.CAREER.Career.bowling.overTheYears} />
          </SectionContainer>

        <SectionContainer>
          <Tabber 
            Tabs={
              [
                {
                  Title:SITELABELS.SUBS.STATS,
                  Component:<SectionCareerBowling  Data={PRIMARY.CAREER.Career.bowling} Career={PRIMARY.CLEAN} {... this.props} />,
                  Icon:<Bowling /> 
                },
                {
                  Title:SITELABELS.SUBS.FORAGAINST,
                  Component:<SectionForandAgainst Table={PRIMARY.CLEAN} Data={PRIMARY} {... this.props}/>,
                  Icon:<PeopleIcon />
                } 
            ]} 
          />
        </SectionContainer>
      </Container>
    )
  }
}