import React, { Component } from 'react';
import {Route,Switch } from "react-router-dom";
// Routes
import ComponentScoreCard from "./ScorecardMain";
// Template
import Container from "../../../Template/Page/Container";
// Class
export default class ScoreCardHub extends Component {
  componentWillMount() {}
  render() {
    return ( 
            <Container>           
                <Switch>
                    <Route  path="/scorecard/:gameid" render={()=>  <ComponentScoreCard {... this.props}/> }/>  
                </Switch>
            </Container>
    )
  }
}   