import React, { Component } from 'react';

import TeamSheet from "./logic/OLD_Login_PlayerRoster";

export default class SelectPlayer extends Component {
  componentWillMount() {  }  
  render() {
    //console.log(this.props, this.props.LOGIN, this.props.match.params)
    return (
      <div id="Results">
        OLD!
        <TeamSheet {... this.props}/> 
      </div> 
    )
  }
}  
