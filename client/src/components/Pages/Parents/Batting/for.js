import React, { Component } from 'react';
import Title from "../../../Elements/type/PageTitle";

export default class Formguide
 extends Component {

  componentWillMount() {
    console.log(this.props.DATA.CLEAN)
  }

  render() {
    return (
      <div>
          <Title Title="For and Against" />
          
      </div>
    )
  }
}