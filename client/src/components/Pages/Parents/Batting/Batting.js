import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Global/PageContainer";


// Components
import BasicStatOverview from "./Sections/Overview/Section_Batting_Overview_BasicStats";
import BattingRankingPods from "./Sections/Overview/Section_Batting_Overview_RankingsPods";
// Table 
import MostForAgainst from "../../../Elements/Tables/MostForAgainst"; 

// Legacy
//import SectionCareerBatting from "./Sections/Section_Career_Batting";
//import Tabber from "../../../Template/Tabber/TabContaner";

// Variables
let PRIMARY,TITLES; 

// Start Class
export default class Page_Batting_Overview extends Component { 
 
  componentWillMount() {
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 
  }

  render() {  

      const Components =[
        {
          COMP:<BattingRankingPods  SUBS={TITLES.SITE.SUBS} CTA={TITLES.SITE.CTA} TITLES = {TITLES.SITE.TITLES} DATA={PRIMARY} />,
          CLASS:"Section_Batting_Rankings complete"
        },
        {
          COMP: <BasicStatOverview SUBS={TITLES.SITE.SUBS} CTA={TITLES.SITE.CTA} TITLES = {TITLES.SITE.TITLES}  DATA={PRIMARY} /> ,
          CLASS:"Section_Batting_Overview complete"
        },
        {
          COMP:<MostForAgainst Data={PRIMARY} TITLES={TITLES.SITE}  />,
          CLASS:"Section_Batting_ForAgainst complete"
        }
      ]
    return (<PageContaner Titles={[TITLES.SITE.TITLES.BATTING,TITLES.SITE.TITLES.OVERVIEW]} Components={Components} />)
  }
}

/**
 *  NOTES: 
 * 
 * 
 * 
 *    
 */

 /**
  * 
  *  Legacy 
  * 
  * // Icons
    //import PeopleIcon from '@material-ui/icons/People';
    //import {Batting} from "../../../Icons/icons";
  *   Tabber for stats and for and against
  *  <Tabber  
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
  * 
  * 
  */