import React, { Component } from 'react';
import Container from "../../../../Template/Page/Container";

// import Badge from '@material-ui/core/Badge';
// Template

import SectionHeader from "../../../../Template/Global/Section_Global_Header";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
// Class

// Icons

import AccountCircle from '@material-ui/icons/AccountCircle';
import ShowChart from '@material-ui/icons/ShowChart'; 
import People from '@material-ui/icons/People';
import Looks4 from '@material-ui/icons/Looks4';
import CakeIcon from '@material-ui/icons/Cake';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import  {Wickets} from "../../../../Icons/icons";

// <Badge className="" badgeContent={'new'} color="secondary">{"Form"}</Badge>,
const Rows=[
    {
        "label":"Overview",
        "perc":'90',
        "stage":"Testing",
        "icon":<AccountCircle/>
      },{
        "label":"Wickets",
        "perc":'90',
        "stage":"Testing",
        "icon":<Wickets/>
      },{
        "label":"AES",
        "perc":'90',
        "stage":"Testing",
        "icon":<GraphicEqIcon/>
      },
      {
        "label":"Form",
        "perc":'50',
        "stage":"ToDo",
        "icon":<ShowChart/>
      },{
        "label":"Notable Figures",
        "perc":'90',
        "stage":"Testing",
        "icon":<Looks4/>
      },{
        "label":"Milestones",
        "perc":'90',
        "stage":"Testing",
        "icon":<CakeIcon/>
      },
      
      {
        "label":"For & Against",
        "perc":'90',
        "stage":"Testing",
        "icon":<People/>
      }
]


export default class RoadMap extends Component {
 
  componentWillMount() {}
  render() {

    return ( 
        <Container>
            <SectionHeader h1="Bowling" />
                    <ul className="roadMap">
                        <ListHeader /> 
                        { Rows.map((item,i)=>{ return( <ListItem key={i} item={item}/>) }) }
                    </ul>
        </Container>
       
    )
  }
} 