import React, { Component } from 'react';

export default class PageHeader extends Component {

  componentWillMount() { }

  render() {
    return (
      <div id="PageHeader" className="canvas1">
            {this.props.children} 
      </div>
    )
  }
} 