import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Page/Containers/PageContainer"; 

// Sections 
import MixedChartEcoRuns from "./Sections/Average/Section_MixedChart_Economy_RunsConceded";
import InteractivePods from "./Sections/Average/Section_Bowling_Average_Economy_SR_Interactive_Pods";

export default class Averages extends Component {

  render() {
    const TITLES = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary;  

    console.log(TITLES);

    const Components =[
      {
        COMP:<InteractivePods TITLE={TITLES} DATA={PRIMARY.CLEAN} {... this.props} />,
        CLASS:"Section_Bowling charts todo"
      },{
        COMP:<MixedChartEcoRuns TITLE={TITLES} DATA={PRIMARY.CLEAN}  {... this.props}/>,
        CLASS:"Section_Bowling charts todo"
      }
    ]

    return (<PageContaner Titles={[TITLES.SUBS.AVG + ', ' + TITLES.SUBS.ECO + ', ' + TITLES.SUBS.SR,TITLES.TITLES.BOWLING]} Components={Components} />)
  } 
}  