import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Dashboard from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';

const Title = (props) => (
    <div className="Graph_Type_and_Info">
        <p className="Page_P">{props.Copy}</p>
        <div>
            <Tooltip title={props.Info} placement="top-start">
                    <IconButton  aria-label={props.Info}>
                        <Dashboard />
                    </IconButton>
            </Tooltip>
        </div>
    </div>
);
export default Title;