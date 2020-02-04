import React, { Component } from './node_modules/react';

// Sections
import Container from "../../../Template/Page/Containers/Container";
import SectionHeader from "../../../Template/Page/Structure/Structure_Page_Header_Main";
import SectionContainer from "../../../Template/Page/Structure/Structure_IsVisable_Container";

export default class About extends Component {

  componentWillMount() { } 

  render() {
    //console.log(this.props.DATA)
    return (
      <div>           
         
          <Container>
              <SectionHeader h1="Change Player" h2="Team Name" /> 

              <SectionContainer>
                 
              </SectionContainer> 
              
          </Container>
      </div>
    )
  }
} 