import React, { Component } from 'react';
import {Route,Switch } from "react-router-dom";

// Routes
import ComponentData from "./Data";

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
                    <Route  exact path="/florish/overview" render={()=>  <ComponentData {... this.props}/> }/>
                </Switch>
            </Container>
    )
  }
} 