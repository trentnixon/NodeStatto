import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
//import PageHeader from "../../../Template/Page/Header";

import InteractiveWicketsOverYears from "../../../Elements/InteractiveCharts/BarChart_WicketsOverTheYears";


export default class Batting extends Component {

  componentWillMount() { console.log(this.props.DATA.CLEAN) }

  render() {
    return (
      <Container>
      <Row>
        <Title Title="Wickets" />
      </Row>
      <Row>
        <Pod col="col-md-6" > Wickets over the years</Pod>
        <Pod col="col-md-6" >  Wickets Most for and against </Pod>
      </Row>
         

      <InteractiveWicketsOverYears {... this.props} />


       <Title Title="Notable Bowling Performaces " />
      <Row>
        <Pod col="col-md-12" > Interactive List</Pod>
      </Row>
    </Container>
    )
  }
} 