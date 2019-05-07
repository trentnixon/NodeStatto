import React, { Component } from 'react';
import ListHistory from "../../../Sections/History/Section_List_History";
import SectionHeader from "../../../Sections/global/Section_Global_Header";


export default class History extends Component {

  componentWillMount() {}
  render() {

    return (
        <div>
            <SectionHeader h1="History " h2="Career" />
                <ListHistory  
                    Title="Complete History"
                    SelectedID={null}
                    List={this.props.DATA.CLEAN}
                    Years={this.props.DATA.CAREER.Career.batting.overTheYears}
                    Match={this.props.match}
                />
        </div>
        
    )
  }
} 