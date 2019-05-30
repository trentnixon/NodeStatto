import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';

// Navigation
import Routes from "./Navigation/Global_Routes";
import StattoAppBarLayout from "./Navigation/AppBar";
import NavBarTop from "./Navigation/NavBarTop";

// Developer
import DeveloperRouter from "../../components/Pages/Dev/DevRouter";

const drawerWidth = 280;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute', 
   
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none', 
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});




const NavBarBottom = (props) => (
  <div className="NavBarBottom">
        <DeveloperRouter {... props}/>
  </div>
);


const NavLayout = (props) => (
  // eslint-disable-next-line
        <div className="DrawerNav">
              <NavBarTop {... props}/>
                  <Routes 
                    Match={props.match}
                    Navigation={props.Navigation}
                  />
                <Divider />
              <NavBarBottom {... props} />
        </div>
);


class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {

    const { classes, theme } = this.props;

    return (
      <div className={classes.root} id="Frame">

      
        <AppBar className={classes.appBar} color="default">
          <Toolbar>
            <IconButton
              color="default" 
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
              <StattoAppBarLayout   
                  {... this.props} 
                batting={this.props.DATA.CAREER.Career.Meta.Rankings.Batting[0]}
                bowling={this.props.DATA.CAREER.Career.Meta.Rankings.Bowling[0]}
                keeping={this.props.DATA.CAREER.Career.Meta.Rankings.Keeping[0]}
              />
          </Toolbar>
        </AppBar>

    
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
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
                open
                classes={{
                  paper: classes.drawerPaper,
                }}
            >
              <NavLayout {... this.props}  Navigation={this.props.Navigation}/>
         
            </Drawer>
        </Hidden>

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