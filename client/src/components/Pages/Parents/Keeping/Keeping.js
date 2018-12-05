import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";

export default class Batting extends Component {

  componentWillMount() { console.log(this.props.DATA.CLEAN) }

  render() {
    return (
      <Container>
        <Row>
          <Title Title="Keeping" />
        </Row>
        <Row>
          <Pod col="col-md-12" > Keeping Rankings. Line Graph</Pod>
          <Pod col="col-md-4" >  Current </Pod>
          <Pod col="col-md-4" > Best </Pod>
          <Pod col="col-md-4" > Worst </Pod>
        </Row>

        <Row>
          <Pod col="col-md-6" > Catches</Pod>
          <Pod col="col-md-6" > Stumpings </Pod>
     
        </Row>
      </Container>
    )
  }
}