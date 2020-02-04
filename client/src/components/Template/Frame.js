import React from 'react';
import PropTypes from 'prop-types';
// Material
import { withStyles } from '@material-ui/core/styles';
// Top Nav Bar
 import TopNavBar from "./Navigation/TopNavBar/Top_Bar_Frame"
// Side Nav
 import SideNavFrame from "./Navigation/SideNav/Side_Nav_Frame"; 

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});

class ResponsiveDrawer extends React.Component {
  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root} id="Frame">
        <TopNavBar {... this.props}/>
        <SideNavFrame {... this.props}/>
          <main className={classes.content}>
            <div className={classes.toolbar} /> 
              {this.props.children} 
            </main> 
      </div> 
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);


/**
 *   <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={DrawerPosition}
            onClose={this.OpenDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
              <NavLayout {... this.props}  Navigation={this.props.Navigation}/>
 
            </Drawer>
        </Hidden>


        <Hidden smDown implementation="css">
            <Drawer 
                variant="permanent" 
                open={DrawerPosition}
                classes={{
                  paper: classes.drawerPaper,
                }}
            >
              <NavLayout {... this.props}  Navigation={this.props.Navigation}/>
                
            </Drawer>
        </Hidden>
 */