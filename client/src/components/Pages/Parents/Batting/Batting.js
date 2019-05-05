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

export default class BattingOverview extends Component {
 
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
        <SectionHeader   h1="Batting" h2="Career"  /> 

        <SectionContainer>
          <SectionRankings  
            Rankings={this.props.DATA.CAREER.Career.Meta.Rankings.Batting}
            Title="Batting Rankings"
            SubTitle="Breakdown of the batting rankings over the career"
          />
        </SectionContainer>

        <SectionContainer>

          <Tabber 
            Tabs={
              [
                {
                  Title:"Stats",
                  Component:<SectionCareerBatting  Data={this.props.DATA.CAREER.Career.batting}  Career={this.props.DATA.CLEAN}/>,
                  Icon:<Batting />
                },
                {
                  Title:"For and Against",
                  Component:<MostForAgainst Table={this.props.DATA.CLEAN} Data={this.props.DATA} {... this.props} />,
                  Icon:<PeopleIcon />
                }
            ]}
          
          /> 

        </SectionContainer>

        
        
        <SectionContainer>
          <SectionMilestonesBatting  
            Data={this.props.DATA.CAREER.Career.batting} 
            Title="Milestones and Achievements"
          />
        </SectionContainer>


      </Container>
    )
  }
}