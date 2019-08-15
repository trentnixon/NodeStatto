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
        <SectionHeader   h1={TITLES.SITE.TITLES.OVERVIEW} h2={TITLES.SITE.TITLES.BATTING}   /> 

        <SectionContainer class="Section_Batting_Rankings complete">
            <SectionRankings  
                Rankings={PRIMARY.CAREER.Career.Meta.Rankings}
                TITLES={TITLES}
                SubTitle={TITLES.SITE.DESC.DESCRANKINGS}  
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