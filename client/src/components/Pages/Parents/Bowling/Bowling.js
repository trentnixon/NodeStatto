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
          <Title Title="Bowling" />
        </Row>
        <Row>
          <Pod col="col-md-12" > Bowling Rankings. Line Graph</Pod>
          <Pod col="col-md-4" >  Current </Pod>
          <Pod col="col-md-4" > Best </Pod>
          <Pod col="col-md-4" > Worst </Pod>
        </Row>
          
            
        <Title Title="Recent Scores" />
        <Row>
          <Pod col="col-md-12" > Recent Figures.</Pod>
         
        </Row>
        <Title Title="Career" />
        <Row>
          <Pod col="col-md-6" > Overs Bowled</Pod>
          <Pod col="col-md-6" > Wickets Taken </Pod>
          <Pod col="col-md-4" > Runs Conceded </Pod>
          <Pod col="col-md-4" > Economy</Pod>
          <Pod col="col-md-4" > Average </Pod>
     
        </Row>

      <Title Title="Achievements and Milestones" />
        <Row>
          <Pod col="col-md-6" >  2 fa </Pod>
          <Pod col="col-md-6" >  3 fa </Pod>
          <Pod col="col-md-6" >  4 fa </Pod>
          <Pod col="col-md-6" >  5 fa </Pod>
          <Pod col="col-md-6" >  6 fa </Pod>
          <Pod col="col-md-6" >  7 fa </Pod>
         
        </Row>
      </Container>
    )
  }
}