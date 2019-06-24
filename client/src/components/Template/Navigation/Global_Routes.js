import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import {UXDrawer} from "../../../actions/UI";

// Icons
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore'; 


const styles = theme => ({ 
  root: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

let Path=null;


class NestedLists extends React.Component {
  state = { open: [false,false,false,false,false,false] };

  handleClick = (i) => {
   //console.log("Handle click")
    let state = this.state.open;
    let NewValue = !state[i];
    state[i]=NewValue
    this.setState({ open: state })

  };

  CloseDrawer = ()=>{
    console.log("Close")
    UXDrawer(false)
  }

  componentWillMount() {
    //console.log(this.props)
    
    Path = this.props.Match.params.playerid; 
    
    //console.log(this.props.Navigation)
  } 

 createListItem(navItem,i){
     return(
        <Link key={i} to={`/${Path}/${navItem.path}`}>
            <ListItem button>
                <ListItemIcon>{navItem.icon}</ListItemIcon>
                <ListItemText inset primary={navItem.label}/>
            </ListItem>
        </Link> 
     )
    }
createCollapseItem(navItem,i){

        let Children = navItem.children.map((children,i)=>{
            return(
                <Link key={i}  onClick={()=>{this.CloseDrawer(true)}} to={`/${Path}/${navItem.path}/${children.path}`}>
                    <ListItem  button className={this.props.nested}>
                        <ListItemIcon>{children.icon}</ListItemIcon>
                        <ListItemText inset primary={children.label}/>
                    </ListItem>
                </Link> 
            )
        })

        return(
            <div key={i} >
                <ListItem button onClick={()=>{this.handleClick(i)}}>
                  <ListItemIcon>{navItem.icon}</ListItemIcon>
                  <ListItemText inset primary={navItem.label}/>
                    {this.state.open[i] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                 
                <Collapse in={this.state.open[i]} timeout="auto" unmountOnExit className="Collapseable">
                    <List component="div" disablePadding>
                        {Children}
                    </List>
                </Collapse>
            </div>
        )
}

  render() {

    const { classes } = this.props;
    
    //console.log(this.props)
    
    return (
      <div className={classes.root}>
        <List component="nav" >
            {
                this.props.Navigation.map((nav,i)=>{
                    if(nav.children !== null){
                      return(this.createCollapseItem(nav,i))
                    }
                    else{
                      return( this.createListItem(nav,i))
                    }
                })
            }
        </List>
      </div>
    );
  }
}

NestedLists.propTypes = { classes: PropTypes.object.isRequired, }; 
export default withStyles(styles)(NestedLists); 