import React, { Component } from 'react';

import SectionHeader from "../../../Template/Page/Structure/Structure_Page_Header_Main";
import SectionContainer from "../../../Template/Page/Structure/Structure_IsVisable_Container";
import ListHistory from "./Sections/Section_List_History";

export default class History extends Component {

  componentWillMount() {}
  render() {
    //console.log(this.props.SITE.TITLES.HISTORY, this.props)
    return (
      <div>
          <SectionHeader h1={this.props.SITE.TITLES.HISTORY } h2={this.props.SITE.TITLES.CAREER} />
            <SectionContainer className="Section_History">
              <ListHistory    
                  SelectedID={null}
                  List={this.props.PLAYER_DATA.Primary.CLEAN}
                  Years={this.props.PLAYER_DATA.Primary.CAREER.Batting.overTheYears}
                  Match={this.props.match}
                  OrderBy={this.props.OrderBy}
                  {...this.props} 
              /> 
          </SectionContainer>
      </div> 
    )
  }
} 