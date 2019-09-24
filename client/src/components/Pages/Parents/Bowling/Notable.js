import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";


export default class Batting extends Component {

  componentWillMount() { }

  render() {

    const SITELABELS = this.props.LABELS.SITE;
   // const PRIMARY = this.props.PLAYER_DATA.Primary;
    return ( 
      <Container>
        <SectionHeader   h1={this.props.LABELS.SITE.SUBS.NOTABLESCORES} h2={SITELABELS.TITLES.BOWLING}  /> 
 
        <SectionContainer className="Section_Bowling_Wickets todo">
          <Title Title="Notable Bowling Performaces : Interactive List" />
        </SectionContainer>

      
    </Container> 
    )
  }
}