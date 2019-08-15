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
    //console.log(this.props)
    return ( 
            <Container>           
                <Switch>
                        <Route   path="/rankings/" render={()=> <ComponentRanking {... this.props}/> }/>
                </Switch>
            </Container>
    )
  }
} 

/**

               
                <Route  exact path='/:id/batting/averages' render={()=> <ComponentAVG {... this.props}/> }/>
                
 * 
 */