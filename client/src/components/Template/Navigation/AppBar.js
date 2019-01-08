import React from 'react';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
// Icons
import Dashboard from '@material-ui/icons/Dashboard';

import Settings from '@material-ui/icons/Settings';
import Backspace from '@material-ui/icons/Backspace';
import Search from '@material-ui/icons/Search';

import  {Batting,Bowling,Keeping} from "../../Icons/icons";


const Nav_Icons=[
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
    return (
          <div id="AppBar"> 
            <div className="Left">
                <Hidden smDown> 
                    <img  alt="Logo"  src="/assets/Logo.png" className="Logo"/>
              </Hidden>
            </div>
            <div className="Center">
              <Hidden smDown> 
                <div>
                  <IconButton   component={Link} to={`/${Path}/`} >
                    <Dashboard /> 
                  </IconButton>
                </div>

                      {
                        Nav_Icons.map((icon,i)=>{
                          if(this.props[icon.link]){
                            return(
                              <div key={i}>
                                <IconButton component={Link} to={`/${Path}/${icon.link}`}>
                                   {icon.icon} 
                                </IconButton>
                                 <p>{this.props[icon.link].rank}</p>
                              </div>
                                
                            )
                          }
                        })
                      }
                </Hidden>
            </div>

            <div className="Right">
               <Hidden smDown> 
                  <IconButton component={Link}  to={`/${Path}/search`}>   <Search />  </IconButton>
                  <IconButton component={Link} to={`/${Path}/settings`}>  <Settings />  </IconButton>
              </Hidden>
              <h1>{this.props.DATA.CURRENTNAME}</h1>
              <Avatar>{this.props.DATA.CURRENTNAME.charAt(0)}</Avatar>
            </div>
          </div>
    );
  }
} 