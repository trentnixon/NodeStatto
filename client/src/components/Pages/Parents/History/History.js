import React, { Component } from 'react';
import {  Route } from "react-router-dom";

// Template
import Container from "../../../Template/Page/Container";


// Routes
import ListHistory from "./HistoryList";
import HistoryFor from "./HistoryFor";
import HistoryAgainst from './HistoryAgainst';
// Class
export default class History extends Component {
 
  componentWillMount() {}
  render() {
    //console.log(this.props)
    return ( 
      <Container>
          <Route exact path={`${this.props.match.path}/history/`} render={()=> <ListHistory {... this.props}/> } />
          <Route path={`${this.props.match.path}/history/for/:teamID`} component={HistoryFor}  />
          <Route path={`${this.props.match.path}/history/against/:teamID`} component={HistoryAgainst}  />
      </Container>
    )
  }
} 