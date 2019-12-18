import React, { Component } from 'react';
import { matchPath } from 'react-router'
// Template
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";
// Components
import DeepOverview from "./Sections/Month/Section_Deep_overview";
import DeepBarChart from "./Sections/Month/Section_Deep_Chart_Bar_Avg_Runs_SR";
import DeepGameTable from "./Sections/Month/Section_Deep_Game_Table";
 
// Variables
let TITLES, DeepData=[];
// Start Class
export default class Batting extends Component {

  FindClean(m,y){
    DeepData=[]
    this.props.PLAYER_DATA.Primary.CLEAN.map((game,i)=>{
        if(game.Meta.Month === m && game.Meta.Year === y){ DeepData.push(game)}
        return true;
    })

    return DeepData;
  }
  componentWillMount() { TITLES = this.props.LABELS; } 

   getMonthFromString(mon){
      return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
  }

  render() { 
    let matchPlayer = matchPath(window.location.pathname, { path: '/:team/:id/batting/deep/:m/:y'})

    // Check to see if int or not.
    if(!Number.isInteger(parseInt(matchPlayer.params.m,10))){ matchPlayer.params.m = this.getMonthFromString(matchPlayer.params.m); }

    let Selected = this.FindClean(parseInt(matchPlayer.params.m, 10) ,parseInt(matchPlayer.params.y,10))

    return (     
      <Container>
        <SectionHeader   h1={'Summary of '+matchPlayer.params.m + '/'+matchPlayer.params.y} h2={this.props.LABELS.SITE.TITLES.BATTING}  /> 
        
         <SectionContainer className="Section_Overview complete" >
            <DeepOverview  Data={Selected} TITLES={TITLES} />
         </SectionContainer>

         <SectionContainer className="Section_Overview complete" >
            <DeepBarChart  Data={Selected} TITLES={TITLES} />
         </SectionContainer>
       
         <SectionContainer className="Section_Overview complete" >
            <DeepGameTable  Data={Selected} TITLES={TITLES} />
         </SectionContainer>
         
      </Container>
    )
  }
}
