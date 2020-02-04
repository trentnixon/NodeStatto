import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Page/Containers/PageContainer"; 
// Components
import Notable from "./Sections/Section_Bowling_NotableFigures";

let PRIMARY,TITLES;
export default class Batting extends Component {

  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 
  }

  render() {
    const SITELABELS = this.props.LABELS.SITE;
    const Components =[
      {
        COMP:<Notable DATA={PRIMARY.CLEAN} TITLE={TITLES.SITE} />,
        CLASS:"Section_Bowling  todo"
      }
    ]
    return ( <PageContaner Titles={[SITELABELS.SUBS.NOTABLEFIGURES,SITELABELS.TITLES.BOWLING]} Components={Components} /> ) 
  }
}