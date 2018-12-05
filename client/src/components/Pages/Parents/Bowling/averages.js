import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
import PageHeader from "../../../Template/Page/Header";


export default class Averages extends Component {

  componentWillMount() { console.log(this.props.DATA.CLEAN) }

  render() {
    return (
      <div>
      <PageHeader>
        Line chart of average and economy rates
      </PageHeader>
      
      <Container>
        <Row>
          <Title Title="Average" />
        </Row>
        <Row>
          <Pod col="col-md-6" > Average the years : Pie Chart</Pod>
          <Pod col="col-md-6" > Average : best for and against text</Pod>
          <Pod col="col-md-12" > Average over time against current: Line Chart</Pod>
        </Row>
        
        <Row>
          <Title Title="Economy" />
        </Row>
        <Row>
          <Pod col="col-md-6" > Economy the years : Pie Chart</Pod>
          <Pod col="col-md-6" > Economy : best for and against text</Pod>
          <Pod col="col-md-12" > Economy over time against current: Line Chart</Pod>
        </Row>
        
        <Row>
          <Title Title="Strike Rate" />
        </Row>
        <Row>
          <Pod col="col-md-6" > Strike Rate the years : Pie Chart</Pod>
          <Pod col="col-md-6" > Strike Rate : best for and against text</Pod>
          <Pod col="col-md-12" > Strike Rate over time against current: Line Chart</Pod>
        </Row>

        
      </Container>
      </div>
    )
  }
}