import React, { Component } from 'react';
import {Route,Switch } from "react-router-dom";

// Routes
import ComponentCaught from "./Catches";
import ComponentStumping from "./Stumpings";
import ComponentForAgainst from "./for";
import ComponentKeepingbyMonth from "./Deep";
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
                    <Route  exact path="/keeping/catches" render={()=>  <ComponentCaught {... this.props}/> }/>
                    <Route  exact path="/keeping/stumpings" render={()=>  <ComponentStumping {... this.props}/> }/>
                    <Route  exact path="/keeping/foragainst" render={()=>  <ComponentForAgainst {... this.props}/> }/>
                    <Route  exact path='/keeping/deep/:m/:y' render={()=> <ComponentKeepingbyMonth {... this.props}/> }/>
                </Switch>
            </Container>
    )
  }
}  