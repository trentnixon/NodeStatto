import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Page/Containers/PageContainer"; 

import Overview from "./Sections/Stumping/Section_Keeping_Stumpings_Overview";
import OverTheYears from "./Sections/Stumping/Section_Keeping_Stumpings_OverTheYears";
import YearsOverMonths from "./Sections/Stumping/Section_Keeping_Stumpings_BarByMonthOverYear";

let PRIMARY,TITLES;
export default class Section_Rankings extends Component {
    componentWillMount() { 
        TITLES = this.props.LABELS.SITE
        PRIMARY = this.props.PLAYER_DATA.Primary; 
      }
    render() {
        const Components =[
            {
              COMP:<Overview TITLES={TITLES}  DATA={PRIMARY} />,
              CLASS:"Section_Keeping charts todo"
            },{
              COMP:<OverTheYears TITLES={TITLES} DATA={PRIMARY.CAREER.Keeping}/>,
              CLASS:"Section_Keeping charts todo"
            },{
                COMP:<YearsOverMonths TITLES={TITLES} DATA={PRIMARY.CAREER.Keeping} />,
                CLASS:"Section_Keeping charts todo"
              }
          ]

        return (  <PageContaner Titles={[TITLES.SUBS.STUMPINGS,TITLES.TITLES.KEEPING]} Components={Components} />)
        }
    }  