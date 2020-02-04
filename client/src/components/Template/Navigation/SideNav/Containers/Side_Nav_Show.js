import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
// Actions
import {UXDrawer} from "../../../../../actions/UI/UI";
// Navigation 
import SideNavStructure from "../Structure/Side_Nav_Structure";

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

class SideNavShow extends React.Component {

  OpenDrawer = ()=>{ UXDrawer(true); }
  render() {

    if(this.props.UX.Mobile) { DrawerPosition = this.props.UX.Mobile.MobileDrawerState }
    const { classes, theme } = this.props;

    return (
        <Hidden mdUp>
            <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={DrawerPosition}
                onClose={this.OpenDrawer}
                classes={{ paper: classes.drawerPaper, }}
                ModalProps={{keepMounted: true }}
            >
                <SideNavStructure {... this.props}/>
            </Drawer>
      </Hidden>
    );
  }
}

SideNavShow.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideNavShow);