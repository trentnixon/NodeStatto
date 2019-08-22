import React, { Component } from 'react';

import Title from "../../Elements/type/PageTitle"
import SubTitle from "../../Elements/type/PageSubTitle";
import Row from "../../Template/Page/Row";


export default class SectionHeaders extends Component {
  render() {
    return (
        <Row className="SectionHeader">
          <Title Title={this.props.h1} />
          <SubTitle Title={this.props.h2}/>
        </Row>
    )
  }
}