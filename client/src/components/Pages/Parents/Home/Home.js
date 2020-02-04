
/**
 *  COMPONENT NOTES
 *  
 *  29-5 : All Components updated with Redux Titles and Labels
 *  
 * 
 *  Home Page V 4.1 Complete!
 *  Updates :  Charts> List. Move to Flex List. Currently material ui List
 * 
 */

import React, { Component } from 'react'; 
// Template
import PageContaner from "../../../Template/Page/Containers/PageContainer";
 
// Sections
import Overview from "./Sections/Section_Home_overview";
import MileStoneOverview from "./Sections/Section_Home_MileStone_Overview";
import Rankings from "./Sections/Section_Home_Rankings";
import Charts from "./Sections/Section_Home_Charts";
import BriefHistory from "./Sections/Section_Home_RecentGames";
import PlayedForSmall from "./Sections/Section_Home_PlayedFor_Small"
 
let TITLES,PRIMARY;
export default class Statto extends Component { 
  render() {
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
    //console.log(PRIMARY.CAREER.Meta.Rankings)
    const Components =[
      {
        COMP:<Overview  SUBS={TITLES.SITE.SUBS} CTA={TITLES.SITE.CTA} TITLES = {TITLES.SITE.TITLES}  DATA={PRIMARY}/> ,
        CLASS:"Section_Overview_Top complete"
      },
      {
        COMP:<MileStoneOverview  SUBS={TITLES.SITE.SUBS} CTA={TITLES.SITE.CTA} TITLES = {TITLES.SITE.TITLES}   DATA={PRIMARY} /> ,
        CLASS:"Section_Overview_Bottom complete"
      },
      {
        COMP:<PlayedForSmall TITLES={TITLES} CTA={TITLES.SITE.CTA} SUBS={TITLES.SITE.SUBS} DATA={PRIMARY} />,
        CLASS:"Section_History complete"
      },
      {
        COMP:<BriefHistory TITLES={TITLES.SITE.TITLES} CTA={TITLES.SITE.CTA} SUBS={TITLES.SITE.SUBS} DATA={PRIMARY.CLEAN} />,
        CLASS:"Section_History complete"
      },
      {
        COMP:<Rankings TITLE={TITLES.SITE.TITLES.RANKINGS} SITE={TITLES.SITE.TITLES}  SUBS={TITLES.SITE.SUBS} DATA={PRIMARY.CAREER.Meta.Rankings}/> ,
        CLASS:"Section_Home_RankingPods complete"
      },
      {
        COMP:<Charts TITLES={TITLES} CTA={TITLES.SITE.CTA} SUBS={TITLES.SITE.SUBS} DATA={PRIMARY}/>,
        CLASS:"Section_Default complete"
      }
    ] 
  
    return (<PageContaner Titles={[TITLES.SITE.TITLES.DASHBOARD,TITLES.SITE.TITLES.OVERVIEW]} Components={Components} />)
  }
}  