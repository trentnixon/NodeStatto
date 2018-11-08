import React, { Component } from 'react';
export default class Pod extends Component {
  render() {
    return (
      <div id="Pod" className={"Outer "+this.props.col}>
            <div className="Inner">
                    {this.props.children} 
            </div>
      </div>
    )
  }
} 