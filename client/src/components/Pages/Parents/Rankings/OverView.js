import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Global/PageContainer";
// Sections 
import SectionRankings from "./Sections/Section_Rankings_LineGraph";

let PRIMARY,TITLES;
export default class Page_RankingOverview extends Component {
 
  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
  }

  render() {  
    const Components =[
      {
        COMP: <SectionRankings Rankings={PRIMARY.CAREER.Career.Meta.Rankings} TITLES={TITLES} Name={PRIMARY.Meta.Name}/> ,
        CLASS:"Section_Career_Rankings complete"
      }
    ]

    return (<PageContaner Titles={[TITLES.SITE.TITLES.RANKINGS,TITLES.SITE.TITLES.OVERVIEW]} Components={Components} />)
  }
}