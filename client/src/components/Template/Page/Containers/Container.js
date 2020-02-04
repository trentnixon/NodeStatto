import React, { Component } from 'react';
export default class container extends Component {
  render() {
    return (
      <div>  {this.props.children}  </div>
    )
  }
} 