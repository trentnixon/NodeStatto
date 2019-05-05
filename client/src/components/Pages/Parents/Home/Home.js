import React, { Component } from 'react';

// import PageHeader from "../../../Template/Page/Header";

// Sections
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionContainer from "../../../Sections/global/SectionContainer";


// Home Page Elements
// import PreviousGames from "../../../Elements/Sliders/PreviousGameSlider";

// Sections
import Overview from "../../../Sections/home/Section_Home_overview";
import Rankings from "../../../Sections/home/Section_Home_Rankings";
import Charts from "../../../Sections/home/Section_Home_Charts";
import BriefHistory from "../../../Sections/home/Section_Home_RecentGames";

export default class Statto extends Component {

  componentWillMount() { }

  render() {
    console.log(this.props.DATA)
    /**
     *   <PageHeader> 
                <PreviousGames {... this.props} />
            </PageHeader>
     */
    return (
      <div>           
         
          <Container>
              <SectionHeader h1="Dashboard" />

              <SectionContainer>
                  <Overview Title="Overview" {... this.props} /> 
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
                  <Charts 
                    Title="Quick Rundown"
                    {... this.props} 
                  />
              </SectionContainer>
              
          </Container>
      </div>
    )
  }
} 