import React from 'react';
import { Link } from "react-router-dom";
import LinkIcon from '@material-ui/icons/ChevronRight'
import Button from '@material-ui/core/Button';

// ${props.match.params.playerid}

const ShowMore = (props) => (
    <Button component={Link} to={`/${props.Player}/${props.Path}`}  className={props.class}>
        {props.Label}
        <LinkIcon  />
      </Button>
    );
export default ShowMore;