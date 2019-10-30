import React, { Component } from 'react';
import {Route,Switch } from "react-router-dom";

// Routes
import ComponentBowling from "./Bowling";
import ComponentFormguide from "./formguide";
import ComponentWickets from "./wickets";
import ComponentNotable from "./Notable";
import ComponentBowlingFor from "./for";
import ComponentBowlingAVG from "./averages";
import ComponentBowlingMilestones from "./Milestones";

// Template
import Container from "../../../Template/Page/Container";

// Class
export default class BowlingHub extends Component {
 
  componentWillMount() {}
  render() {
    //console.log(this.props);
    return ( 
            <Container>            
                <Switch>
                    <Route  exact path="/bowling/overview" render={()=>  <ComponentBowling {... this.props}/> }/>
                    <Route  exact path="/bowling/formguide" render={()=> <ComponentFormguide {... this.props}/> }/>
                    <Route  exact path="/bowling/wickets" render={()=>   <ComponentWickets {... this.props}/> }/>
                    <Route  exact path="/bowling/notable" render={()=>   <ComponentNotable {... this.props}/> }/>
    
                    <Route  exact path="/bowling/milestones" render={()=> <ComponentBowlingMilestones  {... this.props}/> }/>
                    <Route  exact path="/bowling/aes" render={()=> <ComponentBowlingAVG {... this.props}/> }/>
                    <Route  exact path="/bowling/foragainst" render={()=> <ComponentBowlingFor {... this.props}/> }/>
                </Switch>
            </Container>
    )
  } 
} 