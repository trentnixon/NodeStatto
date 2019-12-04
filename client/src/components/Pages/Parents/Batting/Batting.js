import React, { Component } from 'react';

// Template
import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import Tabber from "../../../Template/Tabber/TabContaner";

// Sections
import BasicStatOverview from "./Sections/Section_Batting_Overview_BasicStats";
import BattingRankingPods from "./Sections/Section_Batting_Overview_RankingsPods";
import SectionCareerBatting from "./Sections/Section_Career_Batting";
import MostForAgainst from "../../../Elements/Tables/MostForAgainst"; 

// Icons
import PeopleIcon from '@material-ui/icons/People';
import {Batting} from "../../../Icons/icons";

// Variables
let PRIMARY,TITLES;

// Start Class
export default class Page_BattingOverview extends Component { 
 
  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 
  }

  render() {  
    return (     
      <Container>   
        <SectionHeader   h2={TITLES.SITE.TITLES.OVERVIEW} h1={TITLES.SITE.TITLES.BATTING}   /> 

        <SectionContainer className="Section_Batting_Rankings complete">
            <BasicStatOverview  
                      SUBS={TITLES.SITE.SUBS}
                      CTA={TITLES.SITE.CTA}
                      TITLES = {TITLES.SITE.TITLES} 
                      DATA={PRIMARY}
                    />   
        </SectionContainer>
   
        <SectionContainer className="Section_Batting_Rankings complete">
            <BattingRankingPods 
              SUBS={TITLES.SITE.SUBS} 
              CTA={TITLES.SITE.CTA}
              TITLES = {TITLES.SITE.TITLES}
              DATA={PRIMARY}
            />
  
        </SectionContainer>

        <SectionContainer className="Section_Batting_ForAgainst complete">
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