import React, { Component } from 'react';
import Container from "../../../../Template/Page/Container";

// import Badge from '@material-ui/core/Badge';
// Template

import SectionHeader from "../../../../Template/Global/Section_Global_Header";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
// Class

// Icons
import  {Keeping} from "../../../../Icons/icons";

// <Badge className="" badgeContent={'new'} color="secondary">{"Form"}</Badge>,
const Rows=[
    {
        "label":"Caught Behind", 
        "stage":"Testing",
        "icon":<Keeping/>, 
        "perc":'80',
        "date":""
  },
  {
    "label":"Stumpings", 
    "stage":"Testing",
    "icon":<Keeping/>, 
    "perc":'80',
    "date":""
    },{
      "label":"For and Against", 
      "stage":"Testing",
      "icon":<Keeping/>, 
      "perc":'90',
      "date":""
    },{
      "label":"DEEP", 
      "stage":"ToDo",
      "icon":<Keeping/>, 
      "perc":'0',
      "date":""
    }
]


export default class RoadMap extends Component {
 
  componentWillMount() {}
  render() {

    return ( 
        <Container>
            <SectionHeader h1="Keeping" />
                    <ul className="roadMap">
                        <ListHeader /> 
                        { Rows.map((item,i)=>{ return( <ListItem key={i} item={item}/>) }) }
                    </ul>
        `</Container>
       
    )
  }
} 