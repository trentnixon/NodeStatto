import React, { Component } from 'react';
import {connect } from 'react-redux';
// Sections
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionContainer from "../../../Sections/global/SectionContainer";

import TeamSheet from "../../../Elements/Lists/Login_Teamsheet"; 

class Search extends Component {

  componentWillMount() { }

  render() {
    console.log(this.props)
    return (
      <div id="ChangePlayer">           
         
          <Container>
              <SectionHeader h1="Change Player" h2={this.props.LOGIN.SELECTEDTEAMNAME} /> 

              <SectionContainer>
                  <TeamSheet {... this.props} />
              </SectionContainer> 
              
      
          </Container>
      </div>
    )
  }
} 


const mapStateToProps = (state) => ({ 
  LOGIN: state.LOGIN,
})
export default connect(mapStateToProps)(Search);