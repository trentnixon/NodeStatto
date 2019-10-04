import React from 'react';
import { Link } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
//import Slide from '@material-ui/core/Slide';
//import Grow from '@material-ui/core/Grow';
import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';

/*
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}
*/
export default function TransitionsSnackbar(props) {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  /*
  const handleClick = Transition => () => {
    setState({
      open: true, Transition,
    });
  };
*/
  function handleClose() {
    setState({
      ...state, open: false, 
    });
  }
/*
 function handlePush(id){
        console.log(id);
 }
 */
  return (
    <div>

      <Snackbar
        open={props.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        action={[
            <IconButton key="close" aria-label="close" color="inherit">
              <Link to={`${props.Link}`}>
              <LaunchIcon  />
             </Link> 
            </IconButton>,
          ]}
        ContentProps={{ 'aria-describedby': 'message-id', }}
        message={<span id="message-id">{props.Title}</span>}
      />
    </div>
  );
}

/**
 *        
 */