import React, { Component } from 'react';
import ListHistory from "../../../Sections/History/Section_List_History";

export default class History extends Component {

  componentWillMount() {}
  render() {

    return (
            <ListHistory  
                    Title="Complete History"
                    SelectedID={null}
                    List={this.props.DATA.CLEAN}
                    Years={this.props.DATA.CAREER.Career.batting.overTheYears}
                    Match={this.props.match}
            />
        
    )
  }
} 