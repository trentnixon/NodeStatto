import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Page/Containers/PageContainer"; 

// Sections
import BowlingWicketsTextBasics from "./Sections/Wickets/Section_Bowling_Wickets_Basics";
import WicketsByMonth from "./Sections/Wickets/Section_Bowling_Wickets_BarByMonthOverYear";
import InteractiveWicketsOverYears from "./Sections/Wickets/Section_Bowling_Wickets_OverRuns_By_Oppo";
import SectionWicketsOverTheYearsLineGraph from "./Sections/Wickets/Section_WicketsOverTheYears_LineGraph";

export default class Batting extends Component {

  componentWillMount() {}
  
  render() {
 
    const SITELABELS = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary;
    const Components =[
      {
        COMP:<BowlingWicketsTextBasics TITLE={SITELABELS} DATA={PRIMARY.CAREER.Bowling} />,
        CLASS:"Section_Bowling_Wickets Compelete"
      },{
        COMP:<WicketsByMonth   TITLE={SITELABELS} DATA={PRIMARY.CAREER.Bowling}  PathOpt={this.props.DATA_SETUP} />,
        CLASS:"Section_Bowling_Wickets Compelete"
      },{
        COMP:<SectionWicketsOverTheYearsLineGraph TITLE={SITELABELS} DATA={PRIMARY.CLEAN} PRIMARY={PRIMARY}/>,
        CLASS:"Section_Bowling_Wickets Compelete"
      },{
        COMP:<InteractiveWicketsOverYears DATA={PRIMARY} TITLE={SITELABELS} {... this.props}/>,
        CLASS:"Section_Bowling_Wickets Compelete"
      }
    ]

    return ( <PageContaner Titles={[SITELABELS.SUBS.WICKETS,SITELABELS.TITLES.BOWLING]} Components={Components} /> )
  }
}