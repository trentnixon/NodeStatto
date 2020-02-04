import React, { Component } from 'react';
import PodOuterWrapper from "../PodStructure/Pod_Outer_Wrapper";

export default class Pod extends Component { 
  render() {
    return ( 
      <PodOuterWrapper {... this.props}>
          {this.props.children}
      </PodOuterWrapper>
    )
  }
}  