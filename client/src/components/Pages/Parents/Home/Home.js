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


let TITLES;
export default class Statto extends Component {

  componentWillMount() { }

  render() {
    TITLES = this.props.TITLES
    
    return ( 
      <div>            
         
          <Container>
              <SectionHeader h1={TITLES.DASHBOARD} h2={TITLES.OVERVIEW} /> 

              <SectionContainer class="Section_Overview">
                  <Overview  {... this.props} />  
              </SectionContainer> 
               
              <SectionContainer class="Section_Home_RankingPods">
                <Rankings  
                  Title={TITLES.RANKINGS} 
                  Data={this.props.DATA.CAREER.Career.Meta.Rankings}
                  {... this.props}
                />
              </SectionContainer>

              <SectionContainer class="Section_History">
                  <BriefHistory 
                    Title={TITLES.RECENT}  
                    {... this.props} 
                  />
              </SectionContainer> 
              
              <SectionContainer class="Section_Default">
                  <Charts  {... this.props} />
              </SectionContainer>
              
          </Container>
      </div>
    )
  }
} 

/**
 *  COMPONENT NOTES
 *  
 *  29-5 : All Components updated with Redux Titles and Labels
 *  
 * 
 */