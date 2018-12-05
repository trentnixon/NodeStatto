import React, { Component } from 'react';
import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
import PageHeader from "../../../Template/Page/Header"

export default class Formguide
 extends Component {

  componentWillMount() {
    console.log(this.props.DATA.CLEAN)
  }

  render() {
    return (
      <div>
          <PageHeader>
              Anlysis and radial Chart
          </PageHeader>
          <Container>
            
            <Row>
              <Title Title="Form Guide" />
              </Row>
            <Row>
              <Pod col="col-md-12" > Previous Games (last 5) Bar Chart </Pod>
            </Row>

            <Row>
              <Pod col="col-md-4" > Wickets</Pod>
              <Pod col="col-md-4" >  Average </Pod>
              <Pod col="col-md-4" > Economy </Pod>
              <Pod col="col-md-4" > Runs Conceeded </Pod>
              <Pod col="col-md-4" > Strike Rate </Pod>
              <Pod col="col-md-4" > Overs </Pod>
            </Row>
            </Container>
        </div>
    )
  }
}