import React, { Component } from 'react';

// Template
import PageContaner from "../../../Template/Page/Containers/PageContainer"; 

// Sections
import PlayedFor from "../../../Template/Page/Structure/Tables/PlayedForList";

// Variables
let TITLES,PRIMARY;

// Start Class
export default class PlayedForList extends Component {

  componentWillMount() { }

  render() {
    TITLES = this.props.LABELS;
    PRIMARY = this.props.PLAYER_DATA.Primary;

    const Components =[
      {
        COMP:<PlayedFor TITLES={TITLES}  DATA={PRIMARY.CLEAN} num={null} className="flex-100"/> ,
        CLASS:"Section_Overview  complete" 
      }
    ]
    return (<PageContaner Titles={[TITLES.SITE.TITLES.TEAMS,TITLES.SITE.CTA.FULL]} Components={Components} /> )
  }
}         