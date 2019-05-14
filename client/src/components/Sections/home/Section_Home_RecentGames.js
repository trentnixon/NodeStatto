import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import PodWrapper from "../../Elements/pods/Pod_Outer_Wrapper";
import Title from "../../Elements/type/PageTitle";
import ShowMore from "../../Elements/Buttons/ShowMore";
import ListHistory from "../../Elements/Lists/List_History"
import List from '@material-ui/core/List';
// import SubTitle from "../../Elements/type/PageSubTitle";

let DisplayList, Data;
export default class History extends Component {
 
  componentWillMount() { 
       // console.log(this.props)
        Data = this.props.DATA.CLEAN;
        DisplayList = Data.slice(Math.max(Data.length - 5, 1)).reverse();
    }

  render() {
    return (
        <div className="Section_History" > 
          
          <Title Title={this.props.Title}/>
            
            <div className="ContentContainer canvas1">
                <div className="Body">
                    <List >
                        <ListHistory 
                            Games={DisplayList}
                            isVisible={this.props.isVisible} 
                            match={ this.props.match}
                        />
                    </List>
                </div>
                <div className="Footer">
                    <ShowMore 
                        Label="See All"
                        class=" CTA ButtonRight"
                        Player={this.props.match.params.playerid}
                        Path="history/"
                    />
                </div>
            </div>
    </div> 
    )
  }
} 