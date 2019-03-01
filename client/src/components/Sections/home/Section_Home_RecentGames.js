import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";
import ShowMore from "../../Elements/Buttons/ShowMore";
import ListHistory from "../../Elements/Lists/List_History"
import List from '@material-ui/core/List';
import SubTitle from "../../Elements/type/PageSubTitle";

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
                        <Pod col="col-md-12" canvas="invert"> 
                            <div className="ChartContainer">
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
                        </Pod>
                    </Row>
            </Pod>
        </Row>
    </div> 
    )
  }
} 