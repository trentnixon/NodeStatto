import React, { Component } from 'react';
import {Route,Switch } from "react-router-dom";

// Routes
import ComponentBatting from "./Batting";
import ComponentMilestones from "./Milestones";
import ComponentFormGuide from "./formguide";
import ComponentRuns from "./runs";
import ComponentBalls from "./balls";
import ComponentAVG from "./avg";
import ComponentFOR from "./for";
import ComponentScores from "./scores";
import ComponentRunsbyMonth from "./runsByMonth";

import history from  '../../../../History';

// Template
import Container from "../../../Template/Page/Container";


// Class
export default class BattingHub extends Component {
 
  componentWillMount() {

  }
  render() {
    
    return ( 
            <Container>           
                <Switch history={history}> 
                        <Route   path="/batting/overview" render={()=> <ComponentBatting {... this.props}/> }/>
                        <Route   path="/batting/milestones" render={()=> <ComponentMilestones {... this.props}/> }/>
                        <Route   path='/batting/averages' render={()=> <ComponentAVG {... this.props}/> }/>
                        <Route   path='/batting/formguide' render={()=> <ComponentFormGuide {... this.props}/> }/>
                        <Route   path='/batting/runs' render={()=> <ComponentRuns {... this.props}/> }/>
                        <Route  exact path='/batting/deep/:m/:y' render={()=> <ComponentRunsbyMonth {... this.props}/> }/>
                        <Route  exact path='/batting/by-the-ball' render={()=> <ComponentBalls {... this.props}/> }/>
                        <Route  exact path='/batting/foragainst' render={()=> <ComponentFOR {... this.props}/> }/>
                        <Route  exact path='/batting/scores' render={()=> <ComponentScores {... this.props}/> }/>
                        
                </Switch>
            </Container>
    ) 
  }
} 
 
/**

               
                
                
 * 
 */