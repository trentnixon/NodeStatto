import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";

export default class Batting extends Component {

  componentWillMount() { console.log(this.props.DATA.CLEAN) }

  render() {
    return (
      <div>
          <Title Title="Wickets" />
          
      </div>
    )
  }
}