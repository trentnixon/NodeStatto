import React from 'react';

import Row from "../Row";
import Title from "../Typography/PageTitle"
import SubTitle from "../Typography/PageSubTitle";

const Structure_Page_Header = (props) => (
      <Row className="SectionHeader">
          <Title Title={props.h1} />
          <SubTitle Title={props.h2}/>
        </Row>
);
export default Structure_Page_Header;