import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
// Sections 
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionRankings from "./Sections/Section_Rankings_LineGraph";


let PRIMARY,TITLES;
export default class Page_RankingOverview extends Component {
 
  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
  }

  render() {  
    console.log(this.props)
    return (     
      <Container>  
        <SectionHeader   h1={TITLES.SITE.TITLES.RANKINGS} h2={TITLES.SITE.TITLES.OVERVIEW}   /> 

        <SectionContainer className="Section_Batting_Rankings complete">
            <SectionRankings  
                Rankings={PRIMARY.CAREER.Career.Meta.Rankings}
                TITLES={TITLES}
                Name={PRIMARY.Meta.Name}
            /> 
        </SectionContainer> 
      </Container> 
    )
  }
}

/**
 *  NOTES: 
 * 
 *    
 */