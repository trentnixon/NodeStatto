import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
      <div className="TabContainer canvas1" >
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
            </Typography>
      </div>
   
  );
}

    TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    };

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div id="StattoTabs" className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            centered={true}
          >
          {
               this.props.Tabs.map((tab,i)=>{
                   return(
                        <Tab key={i} label={tab.Title} icon={tab.Icon} />
                   )
               })
          }
          </Tabs>
        </AppBar>

        {
            this.props.Tabs.map((tab,i)=>{
                    return(
                        value === i && <TabContainer>{tab.Component}</TabContainer>
                    )
            })
        }

      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);