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
          
            
        <Title Title="Recent Scores" />
        <Row>
          <Pod col="col-md-12" > recent Scores Table.</Pod>
         
        </Row>
        <Title Title="Career" />
        <Row>
          <Pod col="col-md-6" > Innings</Pod>
          <Pod col="col-md-6" > Total Runs </Pod>
          <Pod col="col-md-4" > Average </Pod>
          <Pod col="col-md-4" > Strike Rate </Pod>
          <Pod col="col-md-4" > Highest Score </Pod>
     
        </Row>

      <Title Title="Achievements and Milestones" />
        <Row>
          <Pod col="col-md-6" >  Not Outs </Pod>
          <Pod col="col-md-6" > Ducks </Pod>
          <Pod col="col-md-4" > Under 10 </Pod>
          <Pod col="col-md-4" > 20s </Pod>
          <Pod col="col-md-4" > 30s </Pod>
          <Pod col="col-md-4" > 40s </Pod>
          <Pod col="col-md-4" > 50s </Pod>
          <Pod col="col-md-4" > 100s </Pod>
        </Row>
      </Container>
    )
  }
}