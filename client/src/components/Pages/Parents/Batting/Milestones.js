import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
// import PhoneIcon from '@material-ui/icons/Phone';
import PeopleIcon from '@material-ui/icons/People';
import {Batting} from "../../../Icons/icons";
// Sections 
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import Tabber from "../../../Template/Tabber/TabContaner";

import SectionCareerBatting from "./Sections/Section_Career_Batting";
import SectionMilestonesBatting from "./Sections/Section_Career_Milestones_Batting";
import MostForAgainst from "../../../Elements/Tables/MostForAgainst"; 

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
        <SectionContainer class="Section_Batting_Milestones complete ">
            <SectionMilestonesBatting  Data={PRIMARY.CAREER.Career.batting} TITLES={TITLES.SITE} />
        </SectionContainer>
        <SectionContainer class="Section_Batting_ForAgainst complete">
            <Tabber  
              Tabs={
                [
                  {
                    Title:TITLES.SITE.SUBS.STATS,
                    Component:<SectionCareerBatting  TITLES={TITLES.SITE} Data={PRIMARY.CAREER.Career.batting} />,
                    Icon:<Batting />
                  },
                  {
                    Title:TITLES.SITE.SUBS.FORAGAINST,
                    Component:<MostForAgainst Data={PRIMARY} TITLES={TITLES.SITE}  />,
                    Icon:<PeopleIcon />
                  } 
              ]}
            />  

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