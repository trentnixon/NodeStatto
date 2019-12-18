import React, { Component } from 'react';

// Templates
import PageContaner from "../../../Template/Global/PageContainer";
// Sections
import SectionNotable from "./Sections/Scores/Section_Batting_NotableScores";
 
let PRIMARY,TITLES;
export default class Batting extends Component {

  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 
  }
  
  render() { 
    const Components =[
      {
        COMP:<SectionNotable DATA={PRIMARY.CLEAN} TITLE={TITLES.SITE} /> ,
        CLASS:"Section_Batting_Scores Table todo"
      }
    ]
    return ( <PageContaner Titles={[TITLES.SITE.SUBS.NOTABLESCORES,TITLES.SITE.TITLES.BATTING]} Components={Components} />) 
  } 
}
   