import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import Tabber from "../../../Template/Tabber/TabContaner";

import PeopleIcon from '@material-ui/icons/People';
import {Bowling} from "../../../Icons/icons";


// import Title from "../../../Elements/type/PageTitle";
// import Row from "../../../Template/Page/Row";
//import Pod from "../../../Template/Page/Pod";

// Sections 
import SectionContainer from "../../../Sections/global/SectionContainer";
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionRankings from "../../../Sections/global/Section_Discipline_Rankings";
import SectionFaBowling from "../../../Sections/bowling/Section_Fa_Bowling";
import SectionCareerBowling from "../../../Sections/bowling/Section_Career_Bowling";
import SectionForandAgainst from "../../../Elements/Tables/MostForAgainstBowling";
export default class BowlingHome extends Component {

  componentWillMount() { } 

  render() {
    return ( 
      <Container>
        <SectionHeader   h1={this.props.TITLES.OVERVIEW} h2={this.props.TITLES.BOWLING} /> 
        
        <SectionContainer>
          <SectionRankings 
            Rankings={this.props.DATA.CAREER.Career.Meta.Rankings.Bowling} 
            Title={this.props.TITLES.RANKINGS}
            SubTitle={this.props.LABELS.SITE.DESC.DESCRANKINGS}   
            {... this.props}
          />
        </SectionContainer>

        <SectionContainer>
          <Tabber 
            Tabs={
              [
                {
                  Title:this.props.SUBS.STATS,
                  Component:<SectionCareerBowling  Data={this.props.DATA.CAREER.Career.bowling} Career={this.props.DATA.CLEAN} {... this.props} />,
                  Icon:<Bowling />
                },
                {
                  Title:this.props.SUBS.FORAGAINST,
                  Component:<SectionForandAgainst Table={this.props.DATA.CLEAN} Data={this.props.DATA} {... this.props}/>,
                  Icon:<PeopleIcon />
                }
            ]} 
          />
        </SectionContainer>
         
        
        <SectionContainer>
          <SectionFaBowling  
            Data={this.props.DATA.CAREER.Career.bowling}
            Title={this.props.TITLES.MILESTONE}
            {... this.props} 
          />
        </SectionContainer>

      </Container>
    )
  }
}