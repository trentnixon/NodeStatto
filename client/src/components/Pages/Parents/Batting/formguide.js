import React, { Component } from 'react';

// Get Statto Page Layout
import PageContaner from "../../../Template/Page/Containers/PageContainer";

// Sections
import SectionCareerBatting from "./Sections/Form/Section_FormGuide_AtAGlance_Batting";
//import SectionMilestonesBatting from "./Sections/Form/Section_Career_Achievments_Batting";
import SectionBattingrecentScores from "./Sections/Form/Section_Batting_FORM_recentScores";
import SectionRunsToBalls from "./Sections/Form/Section_Batting_FORM_Runs_Balls";
import SectionEvaluation from "./Sections/Form/Section_Batting_FORM_Evaluation";
import SectionFormOverTime from "./Sections/Form/Section_Batting_FORM_OverTimeBar";
 

let PRIMARY, TITLES, FORMDATA;
export default class Page_Batting_Formguide
 extends Component {

  componentWillMount() {
    TITLES = this.props.LABELS  
    PRIMARY = this.props.PLAYER_DATA.Primary;
  }  
     
  render() {  
    FORMDATA = PRIMARY.CLEAN.slice(Math.max(PRIMARY.CLEAN.length - 5, 1)).reverse();

    const Components =[
      { 
        COMP:<SectionEvaluation FORMDATA={FORMDATA} CAREER={PRIMARY.CAREER} TITLES={TITLES.SITE} />,
        CLASS:"Section_Batting_FormGuide todo"
      },
      {
        COMP:<SectionCareerBatting Career={PRIMARY.CAREER} TITLES={TITLES.SITE} FORMDATA={FORMDATA}  /> , 
        CLASS:"Section_Batting_FormGuide todo"
      },
      {
        COMP:<SectionFormOverTime CAREER={PRIMARY} TITLES={TITLES.SITE} {...this.props} />,
        CLASS:"Section_Batting_FormGuide todo"
      },{
        COMP:<SectionRunsToBalls TITLES={TITLES.SITE} FORMDATA={FORMDATA} />,
        CLASS:"Section_Batting_FormGuide todo"
      },{
        COMP:<SectionBattingrecentScores FORMDATA={FORMDATA} />,
        CLASS:"Section_Batting_FormGuide todo"
      }
    ]

    return ( 
            <PageContaner 
              Titles={[TITLES.SITE.TITLES.FORMGUIDE,TITLES.SITE.TITLES.BATTING]} 
              Components={Components} 
            />
    )
  }
}

/**
 *  
 *  Data={PRIMARY.CAREER.Form.batting}
 * 
 * ,{
        COMP:<SectionMilestonesBatting Data={PRIMARY.CAREER.Form.batting}  TITLES={TITLES.SITE} />,
        CLASS:"Section_Batting_FormGuide todo"
      },
 */