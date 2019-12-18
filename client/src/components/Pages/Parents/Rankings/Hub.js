import React, { Component } from 'react';
import {Route,Switch } from "react-router-dom";

// Routes
import ComponentRanking from "./OverView";

// Template
import Container from "../../../Template/Page/Container";

// Class
export default class BattingHub extends Component {
 
  componentWillMount() {}
  render() {
    return ( 
            <Container>           
                <Switch>
                      <Route   path="/rankings/" render={()=> <ComponentRanking {... this.props}/> }/>
                </Switch>
            </Container>
    )
  }
}