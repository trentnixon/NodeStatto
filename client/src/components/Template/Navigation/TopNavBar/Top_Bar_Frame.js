import React from 'react';
import PropTypes from 'prop-types';
// Material 
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
// ACTIONS
import {UXDrawer} from "../../../../actions/UI/UI";
// Components
import TopNavBar from "./Top_Nav_Bar";


/** Hide Top Bar on Scroll */
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  /* Finish Hide on Scroll */

  // STYLES
  const styles = theme => ({
    root: {},
    toolbar:{},
    content:{},
    appBar: {
      position: 'absolute', 
    },
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none', 
      },
    },
  });


  class Top_Bar_Frame extends React.Component {
    
    OpenDrawer = ()=>{
        UXDrawer(true);
      }

    render() {
        const { classes } = this.props;
        //console.log(this.props.PLAYER_DATA.Primary.Meta)
        return(
            <HideOnScroll {... this.props}>
            <AppBar className={classes.appBar} color="default">
              <Toolbar>
                <IconButton
                  color="default" 
                  aria-label="Open drawer" 
                  onClick={this.OpenDrawer}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
                  <TopNavBar   
                      {... this.props}  
                      batting={this.props.PLAYER_DATA.Primary.Meta.Batting_Ranking_World_Current}
                      bowling={this.props.PLAYER_DATA.Primary.Meta.Bowling_Ranking_World_Current}
                      //keeping={this.props.DATA.CAREER.Meta.Rankings.Keeping[0]}
                  />
              </Toolbar>
            </AppBar>
        </HideOnScroll>
        )
    }
  }


   Top_Bar_Frame.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(Top_Bar_Frame);