import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Structure
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import SingleValuePod from "../../../Elements/pods/Pod_SingleValue_Iconheader";

import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
// Components
import HistoryList from "./Sections/Section_List_History";


let DisplayTeam=null;
class HistoryFor extends Component {
    FindTeam(URL){
        let Selected=null,Findmatch;
        Findmatch = URL.split("/");
        // eslint-disable-next-line
        this.props.DATA.map((team,i)=>{ if(team.ID === Findmatch[3]){ Selected = team; } })
        return Selected;
    }
0
  componentWillMount() { DisplayTeam = this.FindTeam(this.props.history.location.pathname); }

  render() {
    return (
        <Container>
            <SectionHeader h1={this.props.TITLE} h2={DisplayTeam.Team} />
                <SectionContainer class="Section_History_For todo">
                    <SectionHeader  h2="Batting" />  
                        <Row class="PodRow">
                            
                            <SingleValuePod label="Innings" total={DisplayTeam.Innings} icon= ""  Footer = "" />
                            <SingleValuePod label="Runs" total={DisplayTeam.Runs} icon= ""  Footer = "" />
                            <SingleValuePod label="Average" total={DisplayTeam.AVG} icon= ""  Footer = "" />
                            <SingleValuePod label="Balls Faced" total={DisplayTeam.BF} icon= ""  Footer = "" />
                            <SingleValuePod label="Not Out's" total={DisplayTeam.NO} icon= ""  Footer = "" />
                            <SingleValuePod label="Strike Rate" total={DisplayTeam.SR} icon= ""  Footer = "" />
                         
                        </Row>

                    <SectionHeader  h2="Bowling" />
                        <Row class="PodRow">
                            <SingleValuePod label="Wickets" total={DisplayTeam.Wickets} icon= ""  Footer = "" />
                            <SingleValuePod label="Overs" total={DisplayTeam.Overs} icon= ""  Footer = "" />
                            <SingleValuePod label="Runs Conceded" total={DisplayTeam.RunsConceded} icon= ""  Footer = "" /> 
                        </Row>
                </SectionContainer>

                <SectionContainer class="Section_History_For todo">
                    <SectionHeader  h2="Game History" />
                        <HistoryList 
                            Title={"History for " + DisplayTeam.Team}
                            SelectedID={this.props.match.params.teamID}
                            List={this.props.PLAYER_DATA.Primary.CLEAN}
                            Years={this.props.PLAYER_DATA.Primary.CAREER.Career.batting.overTheYears}
                            Match={this.props.match}
                            OrderBy={this.props.OrderBy}
                            {... this.props}
                        /> 
                 </SectionContainer> 
        </Container>
    )
  }
}  

export default  withRouter(HistoryFor)

/**
 * 
 */