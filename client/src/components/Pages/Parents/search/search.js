import React, { Component } from 'react';
// import {connect } from 'react-redux';
// Sections
import Container from "../../../Template/Page/Containers/Container";
import SectionHeader from "../../../Template/Page/Structure/Structure_Page_Header_Main";
import SectionContainer from "../../../Template/Page/Structure/Structure_IsVisable_Container";

import TeamSheet from "../../../Venders/MaterialUI/Lists/Teamsheet_SelectNewPlayer"; 

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