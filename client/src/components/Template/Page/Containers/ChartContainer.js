/**
 * Example
 *                  <ChartContainer 
                        Title="Career Ranking Progression"
                        flex=" flex-100"
                         DisplayIcons={{
                        "HasInfo":true,
                        "Info":this.props.TITLES.DESC.TEAMSPLAYEDFOR,
                        "Interactive":false,
                        "Filterable":false
                        }}
                    >
 */
import React, { Component } from 'react';
import SubTitle from "../Typography/PageSubTitle";
import InfoPopover from "../../../Venders/MaterialUI/Popover/InfoPopOver"
export default class Row extends Component {
  render() {
    return (
       
        <div className={"ChartMetaContainer "+this.props.flex}>  
            <div className="ChartContainerTitlesandIcons">
                <SubTitle Title={this.props.Title} />
                <InfoPopover  DisplayIcons={this.props.DisplayIcons}/>
            </div>
            
            {this.props.children}  
        </div>
    )
  }
}   