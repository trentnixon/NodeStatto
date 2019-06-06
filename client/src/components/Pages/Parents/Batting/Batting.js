import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
// import PhoneIcon from '@material-ui/icons/Phone';
import PeopleIcon from '@material-ui/icons/People';
import {Batting} from "../../../Icons/icons";
// Sections 
import SectionContainer from "../../../Sections/global/SectionContainer";
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import Tabber from "../../../Template/Tabber/TabContaner";

import SectionRankings from "../../../Sections/global/Section_Discipline_Rankings";
import SectionCareerBatting from "../../../Sections/batting/Section_Career_Batting";
import SectionMilestonesBatting from "../../../Sections/batting/Section_Career_Milestones_Batting";
import MostForAgainst from "../../../Elements/Tables/MostForAgainst"; 

export default class Page_BattingOverview extends Component {
 
  componentWillMount() { }

  /**
   *  <SectionCareerBatting 
            Data={this.props.DATA.CAREER.Career.batting}   
            Career={this.props.DATA.CLEAN}
          /> 
   */
  render() {  
    return (    
      <Container>  
        <SectionHeader   h1={this.props.TITLES.OVERVIEW} h2={this.props.TITLES.BATTING}   /> 

        <SectionContainer class="Section_Batting_Rankings complete">
          <SectionRankings  
            Rankings={this.props.DATA.CAREER.Career.Meta.Rankings.Batting}
            Title={this.props.TITLES.RANKINGS}
            SubTitle={this.props.DESC.DESCRANKINGS}  
            {... this.props}
          />
        </SectionContainer>
 
        <SectionContainer class="Section_Batting_ForAgainst complete">
 
          <Tabber 
            Tabs={
              [
                {
                  Title:this.props.SUBS.STATS,
                  Component:<SectionCareerBatting  {... this.props} Data={this.props.DATA.CAREER.Career.batting}  Career={this.props.DATA.CLEAN}/>,
                  Icon:<Batting />
                },
                {
                  Title:this.props.SUBS.FORAGAINST,
                  Component:<MostForAgainst Table={this.props.DATA.CLEAN} Data={this.props.DATA} {... this.props} />,
                  Icon:<PeopleIcon />
                }
            ]}
          
          />  

        </SectionContainer> 

        <SectionContainer class="Section_Batting_Milestones complete ">
          <SectionMilestonesBatting  
            Data={this.props.DATA.CAREER.Career.batting} 
            Title={this.props.TITLES.MILESTONE}
            {... this.props}
          />
        </SectionContainer>

      </Container>
    )
  }
}

