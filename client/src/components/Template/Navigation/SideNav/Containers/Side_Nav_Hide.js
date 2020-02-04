import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
// Navigation 
import SideNavStructure from "../Structure/Side_Nav_Structure";
// Actions
import {UXDrawer} from "../../../../../actions/UI/UI";

const drawerWidth = 280;
let DrawerPosition = false;
const styles = theme => ({
  root: {},
  toolbar:{},
  content:{},
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  }
});

class SideNavHide extends React.Component {

  OpenDrawer = ()=>{ UXDrawer(true); }
  render() {

    if(this.props.UX.Mobile) { DrawerPosition = this.props.UX.Mobile.MobileDrawerState }
    const { classes } = this.props;

    
    return (
        <Hidden smDown implementation="css">
            <Drawer 
                variant="permanent" 
                open={DrawerPosition}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
              <SideNavStructure {... this.props}/> 
            </Drawer>
        </Hidden>
    );
  }
}

SideNavHide.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideNavHide);