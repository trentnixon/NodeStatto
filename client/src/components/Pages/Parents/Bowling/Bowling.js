import React, { Component } from 'react';

// Icons
//import {Bowling} from "../../../Icons/icons";
//import PeopleIcon from '@material-ui/icons/People';

// Template
import PageContaner from "../../../Template/Page/Containers/PageContainer"; 
//import Tabber from "../../../Template/Tabber/TabContaner";

// Sections 
import BasicStatOverview from "./Sections/Overview/Section_Bowling_Overview_BasicStats";
import SectionRankingOverview from "./Sections/Overview/Section_Bowling_Overview_Rankings";
import SectionForandAgainst from "../../../Template/Page/Structure/Tables/MostForAgainstBowling";
import WicketsOverTheYears from "./Sections/Overview/Section_Bowling_Wickets_OverTheYears";

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

    const Components =[
      {
        COMP:<BasicStatOverview  SUBS={TITLES.SITE.SUBS}  CTA={TITLES.SITE.CTA} TITLES = {TITLES.SITE.TITLES}DATA={PRIMARY} /> ,
        CLASS:"Section_Bowling_Rankings  complete"
      },{
        COMP:<SectionRankingOverview  SUBS={TITLES.SITE.SUBS} CTA={TITLES.SITE.CTA} TITLES = {TITLES.SITE.TITLES} DATA={PRIMARY} />,
        CLASS:"Section_Bowling_Rankings complete"
      },{
        COMP:<WicketsOverTheYears  Data={PRIMARY.CAREER.Bowling.overTheYears} />,
        CLASS:"Section_Bowling complete"
      },{
        COMP:<SectionForandAgainst Table={PRIMARY.CLEAN} Data={PRIMARY} {... this.props}/>,
        CLASS:"Section_Bowling complete"
      }
    ]

    return (<PageContaner Titles={[SITELABELS.TITLES.BOWLING,SITELABELS.TITLES.OVERVIEW]} Components={Components} />)
  }
}