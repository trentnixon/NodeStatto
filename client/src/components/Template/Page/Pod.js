import React, { Component } from 'react';

export default class Pod extends Component { 
  render() {
    return ( 
      <div id="Pod" className={"Outer "}>
            <div className={"Inner " +this.props.canvas + ' '+ this.props.type} >
                    {this.props.children} 
            </div>
      </div>
    )
  }
}  