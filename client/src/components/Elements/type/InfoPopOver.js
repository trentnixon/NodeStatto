import React from 'react';
import Filter from "../../Template/Navigation/DataFilterOptions";
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

/* ********************************************* */
// Is Interactive
/* ********************************************* */
function Interactive  (props){
  if(props.DisplayIcons.Interactive === true){
    return(
      <IconButton className="ChartMetaIcon" variant="contained" >
        <TouchApp />
      </IconButton>
    )
  } else{ return false; }
}

/* ********************************************* */
// IS Fiterable
/* ********************************************* */
function FilterAble(props){
  if(props.DisplayIcons.Filterable === true){
    return( <Filter {... props}/> )
  } else{ return false; }
}

/* ********************************************* */
// Has Info
/* ********************************************* */
function HasInfo(props){
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const classes = useStyles();
  if(props.DisplayIcons.HasInfo === true){
    return(
      <div>
          <IconButton className="ChartMetaIcon" aria-describedby={id} variant="contained" onClick={handleClick}>
            <Info />
          </IconButton>
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
                <Typography className={classes.typography}>{props.DisplayIcons.Info}</Typography>
            </Popover> 
         </div>
    )
  }
  else{ return false; }
}

/* ********************************************* */
// Export Component
/* ********************************************* */

export default function SimplePopover(props) { 
  return (
    <div className="Graph_Type_and_Info">
        <HasInfo {... props}/>
        <Interactive {... props}/>
        <FilterAble {... props} />
    </div>
  );
}