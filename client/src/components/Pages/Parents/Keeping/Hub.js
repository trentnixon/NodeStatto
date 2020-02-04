import React, { Component } from 'react';
import {Route,Switch } from "react-router-dom";
import history from  '../../../../History';
// Routes
import ComponentCaught from "./Catches";
import ComponentStumping from "./Stumpings";
import ComponentForAgainst from "./for";
import ComponentKeepingbyMonth from "./Deep";
// Template
import Container from "../../../Template/Page/Containers/Container";

const routes = [
  { path: "/keeping/catches", component: ComponentCaught},
  { path: "/keeping/stumpings", component: ComponentStumping},
  { path: "/keeping/foragainst", component: ComponentForAgainst},
  { path: "/keeping/deep/:m/:y", component: ComponentKeepingbyMonth}
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => ( <route.component {...route}  /> )}
    />
  );
}

// Class
export default class BowlingHub extends Component {
 
  componentWillMount() {}
  render() {
    //console.log(this.props);
    return ( 
            <Container>   
                <Switch history={history}>
                  { routes.map((route, i) => ( <RouteWithSubRoutes key={i} {...route} {... this.props} /> )) }
                </Switch>         
            </Container> 
    )
  }
}  