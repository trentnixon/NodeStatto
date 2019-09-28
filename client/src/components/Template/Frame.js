import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu'; 

// Navigation
import Routes from "./Navigation/Global_Routes";
import StattoAppBarLayout from "./Navigation/AppBar";
import NavBarTop from "./Navigation/NavBarTop";

import {UXDrawer} from "../../actions/UI";
// Developer
//import DeveloperRouter from "../../components/Pages/Dev/DevRouter";

const drawerWidth = 280;
let DrawerPosition = false;

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


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


const NavBarBottom = (props) => (
  <div className="NavBarBottom">
       
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
  state = { mobileOpen: false };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  
  OpenDrawer = ()=>{
    UXDrawer(true);
  }
  render() {

  
    if(this.props.UX.Mobile)
    {
      DrawerPosition = this.props.UX.Mobile.MobileDrawerState
    }
    //console.log(DrawerPosition)
    const { classes, theme } = this.props;

    
    return (
      <div className={classes.root} id="Frame">

        <HideOnScroll {... this.props}>
        <AppBar className={classes.appBar} color="default">
          <Toolbar>
            <IconButton
              color="default" 
              aria-label="Open drawer" 
              onClick={this.OpenDrawer}
              className={classes.navIconHide}
            >
              <MenuIcon /> tt
            </IconButton>
              <StattoAppBarLayout   
                  {... this.props}  
                  batting={this.props.PLAYER_DATA.Primary.Meta.Batting_Ranking_World_Current}
                  bowling={this.props.PLAYER_DATA.Primary.Meta.Bowling_Ranking_World_Current}
                  //keeping={this.props.DATA.CAREER.Career.Meta.Rankings.Keeping[0]}
              />
          </Toolbar>
        </AppBar>
        </HideOnScroll>

    
        <Hidden mdUp>
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