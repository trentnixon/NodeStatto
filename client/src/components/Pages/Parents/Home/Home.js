
/**
 *  COMPONENT NOTES
 *  
 *  29-5 : All Components updated with Redux Titles and Labels
 *  
 * 
 *  Home Page V 4.1 Complete!
 *  Updates :  Charts> List. Move to Flex List. Currently material ui List
 * 
 */




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
          <Container>
              <SectionHeader h1={TITLES.DASHBOARD} h2={TITLES.OVERVIEW} /> 

              <SectionContainer class="Section_Overview complete" >
                  <Overview  {... this.props} />  
              </SectionContainer> 
               
              <SectionContainer class="Section_Home_RankingPods complete">
                <Rankings  
                  Title={TITLES.RANKINGS} 
                  Data={this.props.DATA.CAREER.Career.Meta.Rankings}
                  {... this.props}
                />
              </SectionContainer>

              <SectionContainer class="Section_History complete">
                  <BriefHistory 
                    Title={TITLES.RECENT}  
                    {... this.props} 
                  />
              </SectionContainer> 
              
              <SectionContainer class="Section_Default complete">
                  <Charts  {... this.props} />
              </SectionContainer>
          </Container>
    )
  }
} 

