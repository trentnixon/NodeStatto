import React, { Component } from 'react';
import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
//import PageHeader from "../../../Template/Page/Header";

export default class Formguide
 extends Component {

  componentWillMount() {
    console.log(this.props.DATA.CLEAN)
  }

  render() {
    return (
      <div>
        <Container>
         <Title Title="Batting For and Against" />
          <Row>
              <Pod col="col-md-12" > 

                <Title Title="Interactive Table" />
                  Table of Content

              </Pod>

          </Row>
        </Container>
      </div>
    )
  }
}