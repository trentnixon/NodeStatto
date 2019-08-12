import React from 'react';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import {LOGO} from "../../Icons/icons"
// Icons
import Dashboard from '@material-ui/icons/Dashboard';
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
                  <Link to="/"> 
                      <LOGO />
                  </Link>
                  
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
                        // eslint-disable-next-line
                        Nav_Icons.map((icon,i)=>{
                          if(this.props[icon.link]){
                            return(
                              <div key={i}>
                                <IconButton component={Link} to={`/${Path}/${icon.link}`}>
                                   {icon.icon} 
                                </IconButton>
                                 <p>{this.props[icon.link]}</p>
                              </div>
                                
                            )
                          }
                        })
                      }
                </Hidden>
            </div>

            <div className="Right">
              <h1>{this.props.PLAYER_DATA.Primary.Meta.Name}</h1>
              <Avatar>{this.props.PLAYER_DATA.Primary.Meta.Name.charAt(0)}</Avatar>
            </div>
          </div>
    );
  }
} 