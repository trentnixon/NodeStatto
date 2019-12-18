import React, { Component } from 'react';
import {Route,Switch } from "react-router-dom";

import history from  '../../../../History';

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

// Template
import Container from "../../../Template/Page/Container";

const routes = [
  { path: "/batting/overview", component: ComponentBatting},
  { path: "/batting/milestones",component: ComponentMilestones,},
  { path: "/batting/formguide", component: ComponentFormGuide, },
  { path: "/batting/runs", component: ComponentRuns, },
  { path: "/batting/by-the-ball", component: ComponentBalls, },
  { path: "/batting/averages", component: ComponentAVG,},
  { path: "/batting/foragainst", component: ComponentFOR, },
  { path: "/batting/scores", component: ComponentScores, },
  { path: "/batting/deep/:m/:y", component: ComponentRunsbyMonth, }
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
export default class BattingHub extends Component {
  render() {
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