import React from 'react';
import { Link } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import TeamNames from "./TeamNames";
// Icons
import Dashboard from '@material-ui/icons/Dashboard';
import History from '@material-ui/icons/History';
import CalendarToday from '@material-ui/icons/PermContactCalendar';


const NavBarTop = (props) => (
    <div className="NavBarTop">
        
        <div className="UserName">
            <div><Avatar>{props.DATA.CURRENTNAME.charAt(0)}</Avatar></div>
            <div>
                <h1>{props.DATA.CURRENTNAME}</h1>
                <TeamNames {... props}/>
            </div>
        </div>
        <div className="Actions">
            <div>
                    <IconButton>
                        <Link to={`/${props.match.params.playerid}/`}><Dashboard /></Link> 
                    </IconButton> 
            </div>
            <div>
            <IconButton> 
                <Link to={`/${props.match.params.playerid}/history`}>
                    <History />
                </Link>
            </IconButton>
            </div>
            <div>
                    <IconButton>
                        <Link to={`/${props.match.params.playerid}/fixtures`}><CalendarToday /></Link> 
                    </IconButton>
                </div> 
            </div>
    </div>
);

export default  NavBarTop;