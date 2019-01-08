import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";

import ListHistory from "../../Elements/Lists/List_History"
import List from '@material-ui/core/List';

let DisplayList, Data;
export default class History extends Component {

  componentWillMount() { 
        console.log(this.props)
        Data = this.props.DATA.CLEAN;
        DisplayList = Data.slice(Math.max(Data.length - 5, 1)).reverse();
    }

  render() {
    return (
        <div className="Section_History" >
        <Row class="ContainerRow">
            <Pod col="col-md-12" > 
                <Title Title={this.props.Title}/>
                    <Row>
                        <Pod col="col-md-12" > 
                            <List >
                                <ListHistory 
                                    Games={DisplayList}
                                    isVisible={this.props.isVisible}
                                    match={ this.props.match}
                                />
                            </List>
                        </Pod>
                    </Row>
            </Pod>
        </Row>
    </div> 
    )
  }
} 