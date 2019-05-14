import React, { Component } from 'react';
import store from '../../../../store/index';
//import {Animated} from "react-animated-css";

import HistoryList from "../../../Sections/History/Section_List_History";

import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";

import SectionHeader from "../../../Sections/global/Section_Global_Header";
import Title from "../../../Elements/type/PageTitle";
//import SubTitle from "../../../Elements/type/PageSubTitle";



class HistoryPod extends Component {
    render() {
          return(
            <Pod col="col-md-4" type="SingleLine" canvas="canvas1">
                <div className="Body">
                    <Title  Title={this.props.Title} />
                    <Title  Title={this.props.Value} />
                </div>
            </Pod>
        )
    }
}


let DisplayTeam=null;
export default class HistoryFor extends Component {

  componentWillMount() {
    const state = store.getState();

   // console.log(state, this.props.match.params.teamID);
   // eslint-disable-next-line
    state.DATA.FOR.map((team,i)=>{
        if(team.ID === this.props.match.params.teamID){
            DisplayTeam = team
        }
    })
  }

  render() {
    return (
     <div>
         <SectionHeader h1="History with" h2={DisplayTeam.Team} />

        <SectionHeader  h2="Batting" />  
        <Row>
            <HistoryPod Value={DisplayTeam.Innings}Title="Innings"/>
            <HistoryPod Value={DisplayTeam.Runs}Title="Runs"/>
            <HistoryPod Value={DisplayTeam.AVG}Title="Average"/>
            <HistoryPod Value={DisplayTeam.BF}Title="Balls Faced"/>
            <HistoryPod Value={DisplayTeam.NO}Title="Not Out's"/>
            <HistoryPod Value={DisplayTeam.SR}Title="Strike Rate"/>
        </Row>

        <SectionHeader  h2="Bowling" />
        <Row>
            <HistoryPod Value={DisplayTeam.Wickets}Title="Wickets"/>
            <HistoryPod Value={DisplayTeam.Overs}Title="Overs"/>
            <HistoryPod Value={DisplayTeam.RunsConceded}Title="RunsConceded"/>
        </Row>

        <HistoryList 
                Title={"History for " + DisplayTeam.Team}
                SelectedID={this.props.match.params.teamID}
                List={store.getState().DATA.CLEAN}
                Years={store.getState().DATA.CAREER.Career.batting.overTheYears}
                Match={this.props.match}
        />
     </div>
    )
  }
}  