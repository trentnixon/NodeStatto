import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Page/Containers/PageContainer"; 
// Section 
import SectionCareerBowling from "./Sections/Form/Section_FormGuide_AtAGlance_Bowling";
import SectionRecentFigures from "./Sections/Form/Section_Bowling_recentFigures";

export default class Formguide
 extends Component {
  render() {

    const SITELABELS = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary;

    const Components =[
      {
        COMP:<SectionCareerBowling  Data={PRIMARY.CAREER.Form.bowling}  Career={PRIMARY.CAREER} {... this.props} />,
        CLASS:"Section_Bowling_FormGuide  todo"
      },{
        COMP:<SectionRecentFigures  Data={PRIMARY.CLEAN}  {... this.props}  />,
        CLASS:"Section_Bowling_FormGuide todo"
      }
    ]
    return (<PageContaner Titles={[SITELABELS.TITLES.FORMGUIDE,SITELABELS.TITLES.BOWLING]} Components={Components} />)
  }
}