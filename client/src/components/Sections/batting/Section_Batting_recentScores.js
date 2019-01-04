import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";
//import SubTitle from "../Elements/type/PageSubTitle";

import Table from "../../Elements/Tables/RecentScores";

export default class Section_Rankings extends Component {
    componentWillMount() {
        //console.log(this.props.Data.slice(0,10))
    }
    render() {
        return (
            <div className="Section Section_Career">
                <Row > 
                <Title  Title="Recent Scores" />
                    <Pod col="col-md-12" >
                        <Table   Data={this.props.Data.slice(0,10)} />
                    </Pod>
                </Row>
            </div>
            )
        }
    } 