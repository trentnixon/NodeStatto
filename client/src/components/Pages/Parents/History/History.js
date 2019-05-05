import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Sections/global/SectionContainer";
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import ListHistory from "../../../Sections/History/Section_List_History";

/*
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
import Title from "../../../Elements/type/PageTitle";
*/



// import List from '@material-ui/core/List';
export default class History extends Component {

  componentWillMount() {}
  render() {
    return (
      <Container>
        <SectionHeader h1="History" />
        <SectionContainer>
          <ListHistory 
            Title="Complete History"
            {... this.props}
          />
        </SectionContainer>
      </Container>
    )
  }
} 