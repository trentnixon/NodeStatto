import React, { Component } from 'react';
import {Route,Switch } from "react-router-dom";
import history from  '../../../../History';
// Routes
import ComponentBowling from "./Bowling";
import ComponentFormguide from "./formguide";
import ComponentWickets from "./wickets";
import ComponentNotable from "./Notable";
import ComponentBowlingFor from "./for";
import ComponentBowlingAVG from "./averages";
import ComponentBowlingMilestones from "./Milestones";

// Template
import Container from "../../../Template/Page/Containers/Container";

const routes = [
  { path: "/bowling/overview", component: ComponentBowling},
  { path: "/bowling/formguide", component: ComponentFormguide},
  { path: "/bowling/wickets", component: ComponentWickets},
  { path: "/bowling/notable", component: ComponentNotable},
  { path: "/bowling/milestones", component: ComponentBowlingMilestones},
  { path: "/bowling/aes", component: ComponentBowlingAVG},
  { path: "/bowling/foragainst", component: ComponentBowlingFor},
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
                {
                  routes.map((route, i) => ( <RouteWithSubRoutes key={i} {...route} {... this.props} /> ))
                }
              </Switch>
            </Container> 
    )
  } 
}