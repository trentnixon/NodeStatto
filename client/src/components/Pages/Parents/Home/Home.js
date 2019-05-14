import React, { Component } from 'react';

// import PageHeader from "../../../Template/Page/Header";

// Sections
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionContainer from "../../../Sections/global/SectionContainer";

// Sections
import Overview from "../../../Sections/home/Section_Home_overview";
import Rankings from "../../../Sections/home/Section_Home_Rankings";
import Charts from "../../../Sections/home/Section_Home_Charts";
import BriefHistory from "../../../Sections/home/Section_Home_RecentGames";

export default class Statto extends Component {

  componentWillMount() { }

  render() {
    console.log(this.props.DATA)
    return (
      <div>           
         
          <Container>
              <SectionHeader h1="Dashboard" h2="Overview" /> 

              <SectionContainer>
                  <Overview  {... this.props} />  
              </SectionContainer>
               
              <SectionContainer>
                <Rankings  
                  Title="Rankings" 
                  Data={this.props.DATA.CAREER.Career.Meta.Rankings}
                  {... this.props}
                />
              </SectionContainer>

              <SectionContainer>
                  <BriefHistory 
                    Title="Recent Games" 
                    {... this.props} 
                  />
              </SectionContainer> 
              
              <SectionContainer>
                  <Charts  {... this.props} />
              </SectionContainer>
              
          </Container>
      </div>
    )
  }
} 