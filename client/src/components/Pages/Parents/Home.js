import React, { Component } from 'react';
import PageHeader from "../../Template/Page/Header";
import Container from "../../Template/Page/Container";
import Row from "../../Template/Page/Row";

// Overview
import BasicPod from "../Parents/Home/Home_Runs";

// Home Page Elements


import RecentScoresBarChart from "./FormGuide/RecentScores_BarChart";
import GamesDonut from "./Home/Chart_Games";
import PlayedFor from "./Home/PlayedForList";


export default class Statto extends Component {

  componentWillMount() { }

  render() {
    console.log(this.props.DATA)
    return (
      <div>          
          <Container>
            
            
            <Row>
              <div className="col-md-8">
                <Row>
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
                </Row>
             </div>
             </Row>
            <Row>
                <RecentScoresBarChart 
                  {... this.props}
                  col="col-md-12"
                />
            </Row>
          </Container>
        
      </div>
    )
  }
} 