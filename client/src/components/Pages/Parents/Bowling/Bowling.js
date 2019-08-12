import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import Tabber from "../../../Template/Tabber/TabContaner";

import PeopleIcon from '@material-ui/icons/People';
import {Bowling} from "../../../Icons/icons";


import SectionForandAgainst from "../../../Elements/Tables/MostForAgainstBowling";
// Sections 
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionRankings from "../../../Template/Global/Section_Discipline_Rankings";

import SectionFaBowling from "./Sections/Section_Fa_Bowling";
import SectionCareerBowling from "./Sections/Section_Career_Bowling";

export default class BowlingHome extends Component {

  componentWillMount() { } 
 
  render() {
    const SITELABELS = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary;

    return ( 
      <Container>
        <SectionHeader   h1={SITELABELS.TITLES.OVERVIEW} h2={SITELABELS.TITLES.BOWLING} /> 
        
        <SectionContainer>
          <SectionRankings 
            Rankings={PRIMARY.CAREER.Career.Meta.Rankings.Bowling} 
            Title={SITELABELS.TITLES.RANKINGS}
            SubTitle={SITELABELS.DESC.DESCRANKINGS}   
         
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

        <SectionContainer>
          <SectionFaBowling  
            Data={PRIMARY.CAREER.Career.bowling}
            Title={SITELABELS.TITLES.MILESTONE}
            {... this.props} 
          />
        </SectionContainer>

      </Container>
    )
  }
}