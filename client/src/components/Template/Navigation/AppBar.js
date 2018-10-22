import React from 'react';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
// Icons
import Dashboard from '@material-ui/icons/Dashboard';

import Settings from '@material-ui/icons/Settings';
import Backspace from '@material-ui/icons/Backspace';
import Search from '@material-ui/icons/Search';

import  {Batting,Bowling,Keeping} from "../../Icons/icons";


const Nav_Icons=[
  {
    "icon":<Dashboard />,
    "link":""
  },
  {
    "icon":<Batting />,
    "link":"batting"
  },
  {
    "icon":<Bowling />,
    "link":"bowling"
  },
  {
    "icon":<Keeping />,
    "link":"keeping"
  }
  
]

let Path=null;
export default class APPBARLAYOUT extends React.Component {
  
  componentWillMount() { 
    Path = this.props.match.params.playerid;
  } 
  
  render() {
    console.log(this.props.match.params.playerid);
    
    return (
          <div id="AppBar"> 
            <div className="Right">
              <img  alt="Logo"  src="/assets/Logo.png" className="Logo"/>
              <IconButton><Backspace /></IconButton>
            </div>
            <div className="Center">
              <Hidden smDown> 
                      {
                        Nav_Icons.map((icon,i)=>{
                            return(
                                <IconButton key={i} >
                                    <Link to={`/${Path}/${icon.link}`}> {icon.icon}</Link> 
                                </IconButton>
                            )
                        })
                      }
                </Hidden>
            </div>
            <div className="Left">
              <IconButton><Link to={`/${Path}/search`}> <Search /></Link>  </IconButton>
              <IconButton><Link to={`/${Path}/settings`}> <Settings /></Link>  </IconButton>
            </div>
          </div>
    );
  }
} 