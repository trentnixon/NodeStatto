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
          <Title Title="Batting" />
        </Row>
        <Row>
          <Pod col="col-md-12" > Batting Rankings. Line Graph</Pod>
          <Pod col="col-md-4" >  Current </Pod>
          <Pod col="col-md-4" > Best </Pod>
          <Pod col="col-md-4" > Worst </Pod>
        </Row>
          
            
        <Title Title="Form Guide" />
        <Row>
          <Pod col="col-md-12" > Previous Scores (last 10) Bar Chart </Pod>
        </Row>

        <Row>
          <Pod col="col-md-12" > Average</Pod>
          <Pod col="col-md-4" >  50s </Pod>
          <Pod col="col-md-4" > NOs </Pod>
          <Pod col="col-md-4" > SR </Pod>
          <Pod col="col-md-4" > BF </Pod>
          <Pod col="col-md-4" > Runs </Pod>
        </Row>

      </Container>
    )
  }
}