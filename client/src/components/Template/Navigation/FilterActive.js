import React from 'react';
import FilterIcon from '@material-ui/icons/Warning';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ResetFilter from "../../Elements/FormElements/FormSelect/ResetFilter"
//let Path;
const  SELECT = {
    YEAR:"Career",
    LEAGUE:"0"
}

const useStyles = makeStyles(theme => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

  
export default function ActiveFilter(props) { 
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
    let Path = props.UX.FORMS.SELECT;
    console.log( Path.LEAGUE , Path.YEAR)
    if(Path.YEAR !==SELECT.YEAR || Path.LEAGUE !==SELECT.LEAGUE ){
        return (
            <div className="FilterActive"> 
               
               <p>

                <IconButton className="ChartMetaIcon" aria-describedby={id} variant="contained" onClick={handleClick}>
                  <FilterIcon />
                </IconButton>

                 <strong> Filter Active  </strong> | Year: {Path.YEAR} | League: {Path.LEAGUE} | 

                 <ResetFilter />
              </p> 

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
                        <Typography className={classes.typography}>Filter is Active! Some stats may be missing.</Typography>
                    </Popover> 
        
               
            </div>
          );
    }
    else{
        return false
    }

    
  }