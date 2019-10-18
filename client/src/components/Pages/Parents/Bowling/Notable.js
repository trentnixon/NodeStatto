import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import Notable from "./Sections/Section_Bowling_NotableFigures";

let PRIMARY,TITLES;
export default class Batting extends Component {

  componentWillMount() { 
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 
  }

  render() {

    const SITELABELS = this.props.LABELS.SITE;
   // const PRIMARY = this.props.PLAYER_DATA.Primary;
    return ( 
      <Container>
        <SectionHeader   h1={this.props.LABELS.SITE.SUBS.NOTABLEFIGURES} h2={SITELABELS.TITLES.BOWLING}  /> 
 
        <SectionContainer className="Section_Bowling_Wickets todo">
          <Notable DATA={PRIMARY.CLEAN} TITLE={TITLES.SITE} />  
        </SectionContainer>

      
    </Container> 
    ) 
  }
}