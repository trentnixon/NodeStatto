import React, { Component } from 'react';
// import {connect } from 'react-redux';
// Sections
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

import TeamSheet from "../../../Elements/Lists/Teamsheet_SelectNewPlayer"; 

export default class Search extends Component {

  componentWillMount() { }
// h2={this.props.LOGIN.SELECTEDTEAMNAME} 
  render() {

    return (
      <div id="ChangePlayer">           
         
          <Container>
              <SectionHeader h1="Change Player" /> 
              <SectionContainer>
                  <TeamSheet 
                    STAGE={this.props.LOADSEQUENCE.LoginSequence.stage}
                    {... this.props} 
                  />
              </SectionContainer> 
          </Container>
      </div>
    )
  }
}