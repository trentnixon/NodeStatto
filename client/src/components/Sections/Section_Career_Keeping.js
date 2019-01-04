import React, { Component } from 'react';

import Row from "../Template/Page/Row";
import Pod from "../Template/Page/Pod";
import Title from "../Elements/type/PageTitle";
import SubTitle from "../Elements/type/PageSubTitle";

export default class Section_Rankings extends Component {
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="Section_Career">
                <Row >
                        <Pod col="col-md-6" >
                            <Title  Title="Caught Behind" />
                            <SubTitle Title={this.props.Data.catches} />
                        </Pod>
                        <Pod col="col-md-6" > 
                            <Title  Title="Stumpings" />
                            <SubTitle Title={this.props.Data.stumping} />   
                        </Pod>
                </Row>
                </div>
            )
        }
    } 