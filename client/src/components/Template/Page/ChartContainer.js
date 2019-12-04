/**
 * Example
 *                  <ChartContainer
                        Info={this.props.TITLES.SITE.DESC.RANKINGLINE}
                        Interactive={true}
                        Title="Career Ranking Progression"
                        flex=" flex-100"
                    >
 */
import React, { Component } from 'react';
import SubTitle from "../../Elements/type/PageSubTitle";
import InfoPopover from "../../Elements/type/InfoPopOver"
export default class Row extends Component {
  render() {
    return (
      
        <div className={"ChartMetaContainer "+this.props.flex}>  
            <div className="ChartContainerTitlesandIcons">
                <SubTitle Title={this.props.Title} />
                <InfoPopover  Info={this.props.Info}Interactive={this.props.Interactive} />
            </div>
           
            {this.props.children}  
        </div>
    )
  }
}   