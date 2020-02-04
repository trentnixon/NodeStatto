import React from 'react';

// Material UI
import Divider from '@material-ui/core/Divider'; 

// Navigation 
import NavBarMiddle from "./Side_Nav_Middle"; 
import NavBarTop from "./Side_Nav_Top";
import NavBarBottom from "./Side_Nav_Bottom";

export default class SideNavStructure extends React.Component {
  render() {
    return (
        <div className="DrawerNav">
            <NavBarTop {... this.props}/>
            <NavBarMiddle Match={this.props.match} Navigation={this.props.Navigation} />
            <Divider />
            <NavBarBottom {... this.props} />
        </div>
    );
  }
}
