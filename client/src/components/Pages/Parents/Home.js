import React, { Component } from 'react';
import PageHeader from "../../Template/Page/Header";
import Container from "../../Template/Page/Container";
import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import PageSubTitle from "../../Elements/type/PageSubTitle";
// Overview
import BasicPod from "../Parents/Home/Home_Runs";
import RankingHomePod from "../Parents/Home/Ranking_Home_Pod";

// Home Page Elements

import PreviousGames from "../Parents/Home/PreviousGameSlider";
import RecentScoresBarChart from "./FormGuide/RecentScores_BarChart";
import GamesDonut from "./Home/Chart_Games";
import PlayedFor from "./Home/PlayedForList";


export default class Statto extends Component {

  componentWillMount() { }

  render() {
    console.log(this.props.DATA)
    return (
      <div>          
           <PageHeader>
                    <PreviousGames 
                      {... this.props} 
                    />
            </PageHeader>

            
          <Container>
            <Row>
              <div className="col-md-8">
                <Row>

                  <PageSubTitle  Title="Overview" />
                  <BasicPod 
                      total={this.props.DATA.CAREER.Career.batting.runs}
                      label="Runs"
                      col="col-md-4"
                      Path="/batting/"
                  />
                  <BasicPod 
                    total={this.props.DATA.CAREER.Career.bowling.wickets}
                    label="Wickets"
                    col="col-md-4"
                    Path="/batting/"
                  />

                  <BasicPod 
                    total={this.props.DATA.CAREER.Career.Keeping.catches}
                    label="Catches"
                    col="col-md-4"
                    Path="/batting/"
                  />
                  
                <PageSubTitle  Title="Rankings" />

                  <RankingHomePod 
                      total={this.props.DATA.CAREER.Career.Meta.Rankings.Batting}
                      label="Batting"
                      col="col-md-4"
                   
                  />
                  <RankingHomePod 
                    total={this.props.DATA.CAREER.Career.Meta.Rankings.Bowling}
                    label="Bowling"
                    col="col-md-4"
                 
                  />

                  <RankingHomePod 
                    total={this.props.DATA.CAREER.Career.Meta.Rankings.Keeping}
                    label="Keeping"
                    col="col-md-4"
                   
                  />




                  <PlayedFor
                    label="Played For"
                    col="col-md-12"
                    {... this.props}
                  />
                </Row>
              </div>
              <div className="col-md-4">
                <Row>
                  
                    <GamesDonut
                      total={this.props.DATA.CAREER.Career.Meta.Games.int}
                      label="Games"
                      col="col-md-12"
                      Career={this.props.DATA.CAREER.Career}
                     
                    />

                    <RecentScoresBarChart {... this.props} col="col-md-12"  />
                </Row>
             </div>
             </Row>
          
          </Container>
        
      </div>
    )
  }
} 