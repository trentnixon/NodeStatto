import React from 'react';
import { Link } from "react-router-dom";
import LinkIcon from '@material-ui/icons/ChevronRight'
import Button from '@material-ui/core/Button';

const ShowMore = (props) => (
    <Button component={Link} to={`/${props.Path}`}  className={props.class}>
        {props.Label}
        <LinkIcon  />
      </Button>
    );
export default ShowMore;