import React, { Component } from 'react';
import Title from "../../Elements/type/PageTitle";
import ListHistory from "../../Elements/Lists/List_History";

export default class History extends Component {

  componentWillMount() { console.log(this.props.DATA.CLEAN)}

  render() {
    return (
      <div>
          <Title Title="History" />
          <ListHistory 
            Games={this.props.DATA.CLEAN}
          />
      </div>
    )
  }
}