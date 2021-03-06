import React  from 'react';
// Icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShowChart from '@material-ui/icons/ShowChart'; 
import People from '@material-ui/icons/People';
import Settings from '@material-ui/icons/Settings';
import Search from '@material-ui/icons/Search';
import Looks4 from '@material-ui/icons/Looks4';
import CakeIcon from '@material-ui/icons/Cake';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import  {Batting, Wickets,Bowling,Runs, Keeping} from "../Icons/icons";
import BackspaceIcon from '@material-ui/icons/Backspace';
//import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import MapIcon from '@material-ui/icons/Map';

export const Navigation =[
    {
      "label":"Rankings", 
      "path":"rankings",
      "icon":<Search/>,  
      "children":null
    },
    {
      "label":"Batting",
      "path":"batting",
      "children":[
          {
            "label":"Overview",
            "path":"overview",
            "icon":<AccountCircle/>,
          },
          {
            "label":"Form",
            "path":"formguide",
            "icon":<ShowChart/>
          },{
            "label":"Runs",
            "path":"runs",
            "icon":<Runs/>
          },
          {
            "label":"Average",
            "path":"averages",
            "icon":<GraphicEqIcon/> 
          },
          {
            "label":"Notable Scores",
            "path":"scores",
            "icon":<Looks4/>
          },
          
          {
            "label":"By The Ball",
            "path":"by-the-ball",
            "icon":<Bowling />
          },
          
          {
            "label":"Milestones",
            "path":"milestones",
            "icon":<CakeIcon />
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
          "path":"overview",
          "icon":<AccountCircle/>
        },
        {
          "label":"Form",
          "path":"formguide",
          "icon":<ShowChart/>
        },{
          "label":"Wickets",
          "path":"wickets",
          "icon":<Wickets/>
        },{
          "label":"AES",
          "path":"aes",
          "icon":<GraphicEqIcon/>
        },{
          "label":"Notable Figures",
          "path":"notable",
          "icon":<Looks4/>
        },{
          "label":"Milestones",
          "path":"milestones",
          "icon":<CakeIcon/>
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
          "label":"Catches",
          "path":"catches",
          "icon":<Keeping/>
        },{
          "label":"Stumpings",
          "path":"stumpings",
          "icon":<Keeping/>
        },{
          "label":"For & Against",
          "path":"foragainst",
          "icon":<People/>
        }
      ],
      "icon":<Keeping/>
    },
    {
      "label":"Change Player", 
      "path":"search",
      "icon":<Search/>, 
      "children":null
    },{
      "label":"Change Team", 
      "path":"reset",
      "icon":<BackspaceIcon />, 
      "children":null
    },
    
    {
      "label":"About",
      "path":"settings",
      "icon":<Settings/>,
      "children":null
    },
    {
      "label":"Road Map",
      "path":"roadmap",
      "icon":<MapIcon />,
      "children":null
    }
  ]  

//  export default  Navigation;
export default {
    Navigation,
}
  

/**
 * {
    "label":"Florish Data", 
    "path":"florish/overview",
    "icon":<ViewWeekIcon />, 
    "children":null
  },
 */