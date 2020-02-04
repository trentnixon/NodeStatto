import React, { Component } from 'react';

import Row from "../../../../Template/Page/Row";
import PodWrapper from "../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";
import Title from "../../../../Template/Page/Typography/PageTitle";
import ShowMore from "../../../../Venders/MaterialUI/Buttons/ShowMore";
import ListHistory from "../../../../Venders/MaterialUI/Lists/List_History"

let DisplayList;
export default class History extends Component {
 
  componentWillMount() { DisplayList = this.props.DATA.slice(Math.max(this.props.DATA.length - 3, 1)).reverse(); }

  render() {
    return (
        <Row className="PodRow HistoryRow">   
          <Title Title={this.props.TITLES.RECENT}/>
            
          <PodWrapper canvas="canvas1" className="flex-100">
              <ListHistory Games={DisplayList} />
              
              <ShowMore 
                  Label={this.props.CTA.ALL}
                  className="CTA ButtonRight" 
                  Path="history/"
              />
              
          </PodWrapper>       
      </Row>  
    )
  }
} 