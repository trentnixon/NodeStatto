import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

// Sections
import SectionNotable from "./Sections/Section_Batting_NotableScores";

let PRIMARY,TITLES;
export default class Batting extends Component {

  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 
  }
  
  render() { 
    return (    
      <Container>
        <SectionHeader   h1={this.props.LABELS.SITE.SUBS.NOTABLESCORES} h2={this.props.LABELS.SITE.TITLES.BATTING}  /> 
        <SectionContainer className="Section_Batting_Runs todo"> 
            <SectionNotable DATA={PRIMARY.CLEAN} TITLE={TITLES.SITE} />  
        </SectionContainer>
      </Container> 
    )
  }
}
  