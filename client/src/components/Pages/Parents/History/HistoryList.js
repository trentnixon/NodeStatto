import React, { Component } from 'react';

import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";
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
                  Years={this.props.PLAYER_DATA.Primary.CAREER.Career.batting.overTheYears}
                  Match={this.props.match}
                  OrderBy={this.props.OrderBy}
                  {...this.props} 
              /> 
          </SectionContainer>
      </div> 
    )
  }
} 