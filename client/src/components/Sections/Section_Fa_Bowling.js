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
            <div className="Section_Milestones">
                <Row>
                        <Pod col="col-md-4" >
                            <SubTitle Title={this.props.Data.fa2} />
                            <Title  Title="2 fa" />
                        </Pod>
                        <Pod col="col-md-4" > 
                            <SubTitle Title={this.props.Data.fa3} />
                            <Title  Title="3 fa" />  
                        </Pod>
                        <Pod col="col-md-4" >
                            <SubTitle Title={this.props.Data.fa4} />
                            <Title  Title="4 fa" />
                        </Pod>
                        <Pod col="col-md-4" >
                        <SubTitle Title={this.props.Data.fa5} />
                            <Title  Title="5 fa" />
                        </Pod>
                        <Pod col="col-md-4" >
                            <SubTitle Title={this.props.Data.fa6} />
                            <Title  Title="6 fa" />
                        </Pod>
                        <Pod col="col-md-4" > 
                        <SubTitle Title={this.props.Data.fa7} />
                            <Title  Title="7 fa" />
                        </Pod>
                </Row>
                </div>
            )
        }
    } 