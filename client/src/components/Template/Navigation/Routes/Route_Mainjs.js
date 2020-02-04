import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";



// Components
import history from  '../../../../History';

import ComponentHome from "../../../Pages/Parents/Home/Home";
import ComponentHistory from "../../../Pages/Parents/History/History";
import RankingHub from "../../../Pages/Parents/Rankings/Hub";
import BattingHub from "../../../Pages/Parents/Batting/Hub";
import BowlingHub from "../../../Pages/Parents/Bowling/Hub";
import ComponentPlayFor from "../../../Pages/Parents/Home/PlayerForFullList";
import ComponentSearch from "../../../Pages/Parents/search/search";
import ComponentReset from "../../../Pages/Parents/search/ChangeTeam";
import ComponentScorecard from "../../../Pages/Parents/Scorecards/Hub";
import ComponentFlorish from "../../../Pages/Parents/Florish/Hub";
import ComponentRoadMap from "../../../Pages/Parents/RoadMap/Hub"
import ComponentKeeping from "../../../Pages/Parents/Keeping/Hub";
//import ComponentAbout from "./Parents/about/about";
 

const routes = [
  { Rpath: "/", component: ComponentHome, exact:true},
  { Rpath: "/playedfor",  component: ComponentPlayFor,  exact:true},
  { Rpath: "/history", component: ComponentHistory,exact:false }, 
  { Rpath: "/rankings", component: RankingHub,exact:false},
  //{ Rpath: "/batting", component: BattingHub,exact:false},
  { Rpath: "/bowling", component: BowlingHub,exact:false},
  { Rpath: "/keeping", component: ComponentKeeping,exact:false},
  { Rpath: "/scorecard", component: ComponentScorecard,exact:false},
  { Rpath: "/search", component: ComponentSearch,exact:false},
  { Rpath: "/reset", component: ComponentReset,exact:false},
  { Rpath: "/florish", component: ComponentFlorish,exact:false},
  { Rpath: "/roadmap", component: ComponentRoadMap,exact:false}
];
 
export default class Statto extends Component {
  componentWillMount() {}  
  render() {
   return (
    <Switch history={history}>
        {
          routes.map((route, i) => ( <Route  key={i} exact={route.exact} path={route.Rpath} render={()=> <route.component {... this.props}/> }/> ))
        }
    </Switch> 
    )  
  }
}