import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import FilterIcon from '@material-ui/icons/FilterList';
import FilterOptions from "../../Elements/FormElements/FormSelect/SelectYear"


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div >
      <Button className="ChartMetaIcon" onClick={toggleDrawer('bottom', true)}>
          <FilterIcon   />  Filter
      </Button> 

          <Drawer className="FilterDraw"  anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                <FilterOptions />
         </Drawer>  
    </div>
  );
}