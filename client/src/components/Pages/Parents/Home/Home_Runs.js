import React from "react";
import IconButton from '@material-ui/core/IconButton';
import Pod from "../../../Template/Page/Pod";
import DeleteIcon from '@material-ui/icons/Layers'
import { Link } from "react-router-dom";

const Pod_Basic = (props) => (
      <Pod col={props.col}>
        <Link to={props.Path}>
            <IconButton className="Pod_More" aria-label="Delete">
              <DeleteIcon />
            </IconButton>
        </Link>
        
        <h1>{props.label}</h1>
        <h2>{props.total}</h2>  
        
      </Pod>
);

export default Pod_Basic;