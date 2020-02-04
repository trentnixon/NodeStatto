import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Page/Containers/PageContainer"; 

// Sections
import SectionBowlingMilestones from "./Sections/Milestones/Section_Fa_Bowling_MIlestones";
import SectionFaBowling from "./Sections/Milestones/Section_Fa_Bowling";

// Start Class
export default class BowlingHome extends Component {

  componentWillMount() { } 
 
  render() {
    const SITELABELS = this.props.LABELS.SITE; 
    const PRIMARY = this.props.PLAYER_DATA.Primary;
    const Components =[
      {
        COMP:<SectionBowlingMilestones DATA={PRIMARY.CAREER.Bowling} TITLE={SITELABELS.TITLES.MILESTONE} {... this.props}  /> ,
        CLASS:"Section_Bowling  todo"
      },{
        COMP:<SectionFaBowling   Data={PRIMARY.CAREER.Bowling} TITLE={SITELABELS.TITLES.ACHIEVEMENTS} {... this.props}  />,
        CLASS:"Section_Bowling todo"
      }
    ]
    return ( <PageContaner Titles={[SITELABELS.TITLES.MILESTONE,SITELABELS.TITLES.BOWLING]} Components={Components} />)
  }
}