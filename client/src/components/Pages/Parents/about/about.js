import React, { Component } from 'react';

// Sections
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionContainer from "../../../Sections/global/SectionContainer";

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