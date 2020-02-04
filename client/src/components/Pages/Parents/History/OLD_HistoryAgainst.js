import React, { Component } from 'react';
import store from '../../../../store/index';

import HistoryList from "../../../Sections/History/Section_List_History";

// import {Animated} from "react-animated-css";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";

import SectionHeader from "../../../Template/Page/Structure/Structure_Page_Header_Main";
import Title from "../../../Template/Page/Typography/PageTitle";
import SubTitle from "../../../Template/Page/Typography/PageSubTitle";


let DataStore;
class HistoryPod extends Component {
    render() {
          return(
            <Pod col="col-md-4" canvas="canvas1">
                <div className="Body">
                    <Title  Title={this.props.Title} />
                    <SubTitle Title={this.props.Value} />
                </div>
            </Pod>
        )
    }
}


let DisplayTeam=null;
export default class HistoryAgainst extends Component {

  componentWillMount() {
    DataStore = store.getState();

   //console.log(state, this.props.match.params.teamID);
   // eslint-disable-next-line
   DataStore.DATA.AGAINST.map((team,i)=>{
        if(team.ID === this.props.match.params.teamID){
            DisplayTeam = team
        }
    })
  }

  render() {
    return (
     <div>
         <SectionHeader h1="History Against" h2={DisplayTeam.Team} />
         <SectionHeader  h2="Batting" />
        <Row>
            
           
            <HistoryPod Value={DisplayTeam.Innings}Title="Innings"/>
            <HistoryPod Value={DisplayTeam.Runs}Title="Runs"/>
            <HistoryPod Value={DisplayTeam.AVG}Title="Average"/>
            <HistoryPod Value={DisplayTeam.BF}Title="Balls Faced"/>
            <HistoryPod Value={DisplayTeam.NO}Title="Not Out's"/>
            <HistoryPod Value={DisplayTeam.SR}Title="Strike Rate"/> 
        </Row>

        <SectionHeader h2="Bowling" />
        <Row>
             
            <HistoryPod Value={DisplayTeam.Wickets}Title="Wickets"/>
            <HistoryPod Value={DisplayTeam.Overs}Title="Overs"/>
            <HistoryPod Value={DisplayTeam.RunsConceded}Title="RunsConceded"/>
        </Row>

        <HistoryList 
                Title={"History Against " + DisplayTeam.Team}
                SelectedID={this.props.match.params.teamID}
                List={store.getState().DATA.CLEAN}
                Years={store.getState().DATA.CAREER.Batting.overTheYears}
                Match={this.props.match}
        />
     </div>
    )
  }
}  