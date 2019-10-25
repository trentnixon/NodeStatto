import React, { Component } from 'react';
import Container from "../../../../Template/Page/Container";
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
import  {Bowling,Runs} from "../../../../Icons/icons";

const Rows=[
    {
        "label":"Overview", 
        "stage":"Ready",
        "icon":<AccountCircle/>, 
        "perc":'100',
        "date":""
  },{
        "label":"Form", 
        "stage":"Ready",
        "icon":<ShowChart/>, 
        "perc":'100',
        "date":""
    },
    {
        "label":"Runs", 
        "stage":"Testing",
        "icon":<Runs/>, 
        "perc":'90',
        "date":""
    },
    {
        "label":"Average", 
        "stage":"Testing",
        "icon":<GraphicEqIcon/>, 
        "perc":'90',
        "date":""
    },
    {
        "label":"Notable Scores", 
        "stage":"Testing",
        "icon":<Looks4 />, 
        "perc":'90',
        "date":""
    },
    {
        "label":"By the Ball", 
        "stage":"Ready",
        "icon":<Bowling />, 
        "perc":'100',
        "date":""
    },
    {
        "label":"Milestones", 
        "stage":"Testing",
        "icon":<CakeIcon />, 
        "perc":'90',
        "date":""
    },
    {
        "label":"For and Against", 
        "stage":"Ready",
        "icon":<People />, 
        "perc":'100',
        "date":""
    },
]


export default class RoadMap extends Component {
 
  componentWillMount() {}
  render() {

    return ( 
        <Container>
            <SectionHeader h1="Batting" />
                    <ul className="roadMap">
                        <ListHeader /> 
                        { Rows.map((item,i)=>{ return( <ListItem key={i} item={item}/>) }) }
                    </ul>
        `</Container>
       
    )
  }
} 