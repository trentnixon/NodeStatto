import React, { Component } from 'react';

// Icons
import {Bowling} from "../../../Icons/icons";
import PeopleIcon from '@material-ui/icons/People';
//
//import SectionRankings from "../../../Template/Global/Section_Discipline_Rankings";
//import SectionFaBowling from "./Sections/Section_Fa_Bowling";

// Template
import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionCareerBowling from "./Sections/Section_Career_Bowling";
import SectionForandAgainst from "../../../Elements/Tables/MostForAgainstBowling";
// Sections 
import Tabber from "../../../Template/Tabber/TabContaner";
import BasicStatOverview from "./Sections/Section_Bowling_Overview_BasicStats";
import SectionWicketsOverTheYears from "./Sections/Section_Bowling_Wickets_OverTheYears";

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
        
        <SectionContainer>
        <BasicStatOverview  
                      SUBS={TITLES.SITE.SUBS}
                      CTA={TITLES.SITE.CTA}
                      TITLES = {TITLES.SITE.TITLES}
                      DATA={PRIMARY}
                    />  
        </SectionContainer>
       

        <SectionContainer>
   
          <SectionWicketsOverTheYears 
            TITLE={TITLES.SITE}
            Data={PRIMARY.CAREER.Career.bowling.overTheYears}
          />
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