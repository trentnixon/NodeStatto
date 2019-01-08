import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";
//import SubTitle from "../Elements/type/PageSubTitle";

import Table from "../../Elements/Tables/RecentFigures";
let ThisData;
export default class Section_Rankings extends Component {
    componentWillMount() {
        ThisData = this.props.Data.slice(Math.max(this.props.Data.length - 10, 1)).reverse();
    }
    render() {
        return (
            <div className="Section_Career">
                <Row > 
                        
                        <Pod col="col-md-12" > 
                        <Title Title="Recent Figures"/>
                           <Table  Data={ThisData}/>
                        </Pod>
                </Row>
            </div>
            )
        }
    } 