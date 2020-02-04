import React from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import {UXDrawer} from "../../../../../actions/UI/UI"; 

// Icons
import Dashboard from '@material-ui/icons/Dashboard';
import History from '@material-ui/icons/History';
import CalendarToday from '@material-ui/icons/PermContactCalendar';

const NavBarTop = (props) => {
    function CloseDrawer(){
        //console.log("Close");
        UXDrawer(false); 
      }

      //console.log(props.DATA_SETUP.SelectedPlayerID);
      return(
        <div className="NavBarTop">
        
        <div className="Actions">
            <div>
                <IconButton onClick={()=>{CloseDrawer()}} component={Link} to={`/`}>
                    <Dashboard />
                </IconButton> 
            </div>
            <div>
                <IconButton onClick={()=>{CloseDrawer()}} component={Link}  to={`/history`}> 
                    <History />
                </IconButton>
            </div>
            <div>
                <IconButton onClick={()=>{CloseDrawer()}} component={Link} to={`/fixtures`}>
                       <CalendarToday />
                </IconButton>
            </div> 
            </div>
            <div className="UserName">
            <div>
                <Avatar
                    alt=""
                    src={"https://admin.lastmanstands.com/SpawtzApp/Images/User/"+props.DATA_SETUP.SelectedPlayerID+"_UserProfileImage.jpeg"}
                    className="PlayerAvatar"
                /> 
            </div>

        </div>
    </div>
      )
    
    };

export default  NavBarTop;

/**
 *        <FormSelect TITLE={props.LABELS.SITE} 
                    {... props}/>
 */