import React from 'react';
import { Link } from "react-router-dom";
import LinkIcon from '@material-ui/icons/ChevronRight'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
const ShowMore = (props) => (
    <IconButton component={Link} to={`/${props.Path}`}  className={props.Name}>
        <LinkIcon  />
      </IconButton>
    );
export default ShowMore;