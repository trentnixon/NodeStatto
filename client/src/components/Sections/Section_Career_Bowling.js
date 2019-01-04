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
                <Row>
                        <Pod col="col-md-6" >
                            <Title  Title="Wickets" />
                            <SubTitle Title={this.props.Data.wickets} />
                        </Pod>
                        <Pod col="col-md-6" > 
                            <Title  Title="Overs Bowled" />
                            <SubTitle Title={this.props.Data.ob} />   
                        </Pod>
                        <Pod col="col-md-3" >
                            <Title  Title="Runs Conceeded" />
                            <SubTitle Title={this.props.Data.rc} />
                        </Pod>
                        <Pod col="col-md-3" >
                            <Title  Title="Economy" />
                            <SubTitle Title={this.props.Data.economy} />
                        </Pod>
                        <Pod col="col-md-3" >
                            <Title  Title="Average " />
                            <SubTitle Title={this.props.Data.average} />
                        </Pod>
                        <Pod col="col-md-3" > 
                            <Title Title="Strike Rate" />
                           <SubTitle Title={this.props.Data.sr}/>
                        </Pod>
                </Row>
                </div>
            )
        }
    } 