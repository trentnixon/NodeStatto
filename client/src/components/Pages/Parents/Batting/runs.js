import React, { Component } from 'react';

import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
import PageHeader from "../../../Template/Page/Header";


export default class Batting extends Component {

  componentWillMount() { console.log(this.props.DATA.CLEAN) }

  render() {
    return (
      <div>
      <PageHeader>
        Line chart of runs over the years
      </PageHeader>
      
      <Container>
        <Row>
          <Title Title="Runs" />
        </Row>
        <Row>
          <Pod col="col-md-6" > Over the years : Pie Chart</Pod>
        
          <Pod col="col-md-6" > Run against Balls Faced : Chart</Pod>
        </Row>
        

        
        <Row>
          <Pod col="col-md-8" > 
           <Title Title="Notable Scores" />
            Interactive List</Pod>
      
          <Pod col="col-md-4" > 
            <Title Title="Runs by the game" />
          Interactive Line Chart</Pod>
        </Row>

        <Title Title="Innings Breakdown" />


        <Row>
            <Pod col="col-md-6" > 
            <Title Title="Inning over the years" />
              pie Charts</Pod>
        
            <Pod col="col-md-6" > 
              <Title Title="Most for and against" />
              Text
          </Pod>
        </Row>

        <Title Title="Average" />
          <Row>
            <Pod col="col-md-6" > 
                <Title Title="Averages over the years" />
                pie Charts
            </Pod>
        
            <Pod col="col-md-6" > 
              <Title Title="Average Best For and Against" />
                  Text
            </Pod>
        </Row>


        <Title Title="Strike Rate" />  
        <Row>
            <Pod col="col-md-6" > 
                <Title Title="Strike Rate over the years" />
                pie Charts
            </Pod>
        
            <Pod col="col-md-6" > 
              <Title Title="Strike Rates Best For and Against" />
                  Text
            </Pod>
        </Row>
   
        <Title Title="Balls Faced" />

          <Row>
            <Pod col="col-md-6" > 
                <Title Title="Balls Faced over the years" />
                pie Charts
            </Pod>
        
            <Pod col="col-md-6" > 
              <Title Title="Most Balls Faced for and against" />
                  Text
            </Pod>
          <Pod col="col-md-12" > 
              <Title Title="Runs to Balls Faced" />
              Interactive Bar Chart
          </Pod>
        </Row>
        
      </Container>
      </div>
    )
  }
}