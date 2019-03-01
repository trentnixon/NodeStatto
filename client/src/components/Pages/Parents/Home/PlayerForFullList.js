import React, { Component } from 'react';
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
// Sections
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Sections/global/Section_Global_Header";

// Sections
import PlayedFor from "../../../Elements/Tables/PlayedForList";

export default class Statto extends Component {

  componentWillMount() { }

  render() {
    return (
      <div>          
         
          <Container>
              <SectionHeader h1="Played For Full List" />
                <div className="Section_Charts" >
                        <Row class="ContainerRow">
                            <Pod col="col-md-12" > 
                                <Row>
                                <Pod col="col-md-12" > 
                                    <PlayedFor 
                                        Label="Teams Played for"
                                        num={null}
                                        {... this.props} 
                                    />
                                </Pod>
                                </Row>
                            </Pod>
                        </Row>
                </div>
          </Container>
      </div>
    )
  }
} 