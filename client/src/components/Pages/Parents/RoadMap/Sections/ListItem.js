import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
const ListItem = (props) => (
    <li  className={props.item.stage}>
    <span><ListItemIcon className="LinkIcon" >{props.item.icon}</ListItemIcon> {props.item.label}</span>
    <span>{props.item.perc}% </span>
</li>
);
export default ListItem;