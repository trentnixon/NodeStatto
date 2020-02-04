import React from 'react';
import SideNavShow from "./Containers/Side_Nav_Show";
import SideNavHide from "./Containers/Side_Nav_Hide";

export default class SideNavFrame extends React.Component {
  render() {
    return (
      <div id="Side_Nav_Frame">
         <SideNavShow {... this.props}/>
         <SideNavHide {... this.props}/>
      </div> 
    );
  }
}