
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
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

// Sections
import Overview from "./Sections/Section_Home_overview";
import MileStoneOverview from "./Sections/Section_Home_MileStone_Overview";
import Rankings from "./Sections/Section_Home_Rankings";
import Charts from "./Sections/Section_Home_Charts";
import BriefHistory from "./Sections/Section_Home_RecentGames";

let TITLES,PRIMARY;
export default class Statto extends Component {

  componentWillMount() { }

  render() {
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary;
    
    return (
          <Container>
              <SectionHeader h1={TITLES.DASHBOARD} h2={TITLES.OVERVIEW} /> 

              <SectionContainer class="Section_Overview complete" > 
                  <Overview  
                      SUBS={TITLES.SITE.SUBS}
                      CTA={TITLES.SITE.CTA}
                      TITLES = {TITLES.SITE.TITLES}
                      DATA={PRIMARY}
                    />  

                  <MileStoneOverview 
                      SUBS={TITLES.SITE.SUBS}
                      CTA={TITLES.SITE.CTA}
                      TITLES = {TITLES.SITE.TITLES}
                      DATA={PRIMARY}
                  />
              </SectionContainer>   

              <SectionContainer class="Section_Home_RankingPods complete">
                <Rankings  
                    TITLE={TITLES.SITE.TITLES.RANKINGS} 
                    SITE={TITLES.SITE.TITLES} 
                    SUBS={TITLES.SITE.SUBS}
                    DATA={PRIMARY.CAREER.Career.Meta.Rankings}
                /> 
              </SectionContainer>

              <SectionContainer class="Section_History complete">
                  <BriefHistory 
                    TITLES={TITLES.SITE.TITLES} 
                    CTA={TITLES.SITE.CTA}
                    SUBS={TITLES.SITE.SUBS}
                    DATA={PRIMARY.CLEAN}
                 
                  />
              </SectionContainer> 

              <SectionContainer class="Section_Default complete">
                  <Charts   
                      TITLES={TITLES.SITE.TITLES} 
                      CTA={TITLES.SITE.CTA}
                      SUBS={TITLES.SITE.SUBS}
                      DATA={PRIMARY}
                    
                    /> 
              </SectionContainer>
          </Container>
    )
  }
} 


/**
 *  
 */