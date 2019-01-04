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
                <Title Title="Achievements and Milestones" />
                <Row > 
                        <Pod col="col-md-4" >
                            <SubTitle Title={this.props.Data.ducks} />
                            <Title  Title="Ducks" />
                            
                        </Pod>
                        <Pod col="col-md-4" > 
                            <SubTitle Title={this.props.Data.s_10} /> 
                            <Title  Title="< 10" />
                             
                        </Pod>
                        <Pod col="col-md-4" > 
                            <SubTitle Title={this.props.Data.s_20}/>
                            <Title Title="20 odd" />
                           
                        </Pod>
                        <Pod col="col-md-3" >
                            <SubTitle Title={this.props.Data.s_30} />
                            <Title  Title="30 odd" />
                            
                        </Pod>
                        <Pod col="col-md-3" >
                            <SubTitle Title={this.props.Data.s_40} />
                            <Title  Title="40 odd" />
                           
                        </Pod>
                        <Pod col="col-md-3" >
                            <SubTitle Title={this.props.Data.s_50} />
                            <Title  Title="50 +  " />
                        </Pod>
                        <Pod col="col-md-3" > 
                            <SubTitle Title={this.props.Data.s_100}/>
                            <Title Title="100 +" />
                        </Pod>
                </Row>
            </div>
            )
        }
    } 