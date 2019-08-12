import React, { Component } from 'react';

import Row from "../../../../Template/Page/Row";
import PodWrapper from "../../../../Elements/pods/Pod_Outer_Wrapper";
import Title from "../../../../Elements/type/PageTitle";
import ShowMore from "../../../../Elements/Buttons/ShowMore";
import ListHistory from "../../../../Elements/Lists/List_History"

let DisplayList;
export default class History extends Component {
 
  componentWillMount() { DisplayList = this.props.DATA.slice(Math.max(this.props.DATA.length - 5, 1)).reverse(); }

  render() {
    return (
        <Row class="PodRow HistoryRow">  
          <Title Title={this.props.TITLE}/>
            
          <PodWrapper canvas="canvas1">
              <ListHistory Games={DisplayList} />
              
              <ShowMore 
                  Label={this.props.CTA.ALL}
                  class="CTA ButtonRight" 
                  Path="history/"
              />
              
          </PodWrapper>      
      </Row> 
    )
  }
} 