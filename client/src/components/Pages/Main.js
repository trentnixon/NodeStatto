import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Frame from "../Template/Frame";
import Component_Home from "./Parents/Home";
import Component_History from "./Parents/History";
import Component_Batting from "./Parents/Batting/Batting";
import Component_FormGuide from "./Parents/Batting/formguide";
import Component_Runs from "./Parents/Batting/runs";
import Component_AVG from "./Parents/Batting/avg";
import Component_FOR from "./Parents/Batting/for";
import Component_Bowling from "./Parents/Bowling/Bowling";
import Component_Formguide from "./Parents/Bowling/formguide";
import Component_Wickets from "./Parents/Bowling/wickets";
import Component_Bowling_For from "./Parents/Bowling/for";
import Component_Bowling_AVG from "./Parents/Bowling/averages";
import Component_Keeping from "./Parents/Keeping/Keeping";

// Icons

import AccountCircle from '@material-ui/icons/AccountCircle';
import ShowChart from '@material-ui/icons/ShowChart';
import MultilineChart from '@material-ui/icons/MultilineChart';
import People from '@material-ui/icons/People';
import  {Batting, Bowling,Keeping, Wickets,Runs} from "../Icons/icons";

const  Navigation =[
    
  {
    "label":"Batting",
    "path":"batting",
    "children":[
        {
          "label":"Overview",
          "path":"",
          "icon":<AccountCircle/>,
        },
        {
          "label":"Form Guide",
          "path":"formguide",
          "icon":<ShowChart/>
        },
        {
          "label":"Runs",
          "path":"runs",
          "icon":<Runs/>
        },
        {
          "label":"AVG & SR",
          "path":"averages",
          "icon":<MultilineChart/>
        },
        {
          "label":"For & Against",
          "path":"foragainst",
          "icon":<People/>
        }
      ],
      "icon":<Batting/>
  },
  {
    "label":"Bowling",
    "path":"bowling",
    "children":[
      {
        "label":"Overview",
        "path":"",
        "icon":<AccountCircle/>
      },
      {
        "label":"Form Guide",
        "path":"formguide",
        "icon":<ShowChart/>
      },
      {
        "label":"Wickets",
        "path":"wickets",
        "icon":<Wickets/>
      },
      {
        "label":"AES",
        "path":"aes",
        "icon":<MultilineChart/>
      },
      {
        "label":"For & Against",
        "path":"foragainst",
        "icon":<People/>
      }
    ],
    "icon":<Bowling/>
  },
  {
    "label":"Keeping",
    "path":"keeping",
    "children":[
      {
        "label":"Overview",
        "path":"",
        "icon":<AccountCircle/>
      }
    ],
    "icon":<Keeping/>
  } 
] 
export default class Statto extends Component {
  componentWillMount() { } 
  render() {
    
    return (
      <Router>
          <Frame {... this.props} Navigation={Navigation}>
            <div id="display-statto-app">
              <Route  exact path='/:id' render={()=> <Component_Home {... this.props}/> }/>
              <Route  exact path="/:id/history" render={()=> <Component_History {... this.props}/> }/>
              <Route  exact path="/:id/batting" render={()=> <Component_Batting {... this.props}/> }/>
                <Route  exact path='/:id/batting/formguide' render={()=> <Component_FormGuide {... this.props}/> }/>
                <Route  exact path='/:id/batting/runs' render={()=> <Component_Runs {... this.props}/> }/>
                <Route  exact path='/:id/batting/averages' render={()=> <Component_AVG {... this.props}/> }/>
                <Route  exact path='/:id/batting/foragainst' render={()=> <Component_FOR {... this.props}/> }/>
              <Route  exact path="/:id/bowling" render={()=> <Component_Bowling {... this.props}/> }/>
                <Route  exact path="/:id/bowling/formguide" render={()=> <Component_Formguide {... this.props}/> }/>
                <Route  exact path="/:id/bowling/wickets" render={()=> <Component_Wickets {... this.props}/> }/>
                <Route  exact path="/:id/bowling/foragainst" render={()=> <Component_Bowling_For {... this.props}/> }/>
                <Route  exact path="/:id/bowling/aes" render={()=> <Component_Bowling_AVG {... this.props}/> }/>
              <Route  exact path="/:id/keeping/" render={()=> <Component_Keeping {... this.props}/> }/>
                  
                
            </div>
          </Frame>
      </Router>
    ) 
  }
}