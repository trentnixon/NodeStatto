import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Info from '@material-ui/icons/Info';
import TouchApp from '@material-ui/icons/TouchApp';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

function Interactive  (props){
  if(props.Interactive === true){
    return(
      <IconButton className="ChartMetaIcon" variant="contained" >
        <TouchApp />
      </IconButton>
    )
  }
  else{ return false; }
}

export default function SimplePopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="Graph_Type_and_Info">
       
        <IconButton className="ChartMetaIcon" aria-describedby={id} variant="contained" onClick={handleClick}>
          <Info />
        </IconButton>

        <Interactive {... props}/>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl} 
              onClose={handleClose}
              anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'center',
                }}
            >
              <Typography className={classes.typography}>{props.Info}</Typography>
          </Popover>
    </div>
  );
}