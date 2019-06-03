import React, { Component } from 'react';
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import ListHistory from "../../../Sections/History/Section_List_History";
import SectionContainer from "../../../Sections/global/SectionContainer";

export default class History extends Component {

  componentWillMount() {}
  render() {
    return (
      <div>
        <SectionHeader h1={this.props.TITLES.HISTORY} h2={this.props.TITLES.CAREER} />
          <SectionContainer class="Section_History">
            <ListHistory  
                SelectedID={null}
                List={this.props.DATA.CLEAN}
                Years={this.props.DATA.CAREER.Career.batting.overTheYears}
                Match={this.props.match}
                {... this.props}
            />
          </SectionContainer>
      </div>
    )
  }
} 