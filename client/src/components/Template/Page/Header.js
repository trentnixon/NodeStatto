import React, { Component } from 'react';

export default class PageHeader extends Component {

  componentWillMount() { }

  render() {
    return (
      <div id="PageHeader">
            {this.props.children} 
      </div>
    )
  }
} 