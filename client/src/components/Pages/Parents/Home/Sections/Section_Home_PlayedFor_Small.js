import React, { Component } from 'react';

import Row from "../../../../Template/Page/Row";
import ChartRow from "../../../../Template/Page/Containers/ChartContainer";
import PlayedFor from "../../../../Template/Page/Structure/Tables/PlayedForList";

export default class History extends Component {

  render() {
    return (
        <Row className="PodRow HistoryRow">   
          <ChartRow
            flex="flex-100 flex-m-100"
            DisplayIcons={{
              "Info":this.props.TITLES.SITE.DESC.TEAMSPLAYEDFOR,
              "HasInfo":true,
              "Interactive":false, 
              "Filterable":false
            }}
          >
            <PlayedFor 
                TITLES={this.props.TITLES} 
                CTA={this.props.CTA}
                SUBS={this.props.SUBS}
                num={5}
                DATA={this.props.DATA.CLEAN}
                className="flex-100"
            />
          </ChartRow>
      </Row>  
    )
  }
}