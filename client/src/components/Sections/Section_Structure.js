import React, { Component } from 'react';

import Row from "../Template/Page/Row";
import Pod from "../Template/Page/Pod";

import Title from "../Elements/type/PageTitle";
import SubTitle from "../Elements/type/PageSubTitle";



export default class Section_Default extends Component {
    componentWillMount() {} 
    render() {
        //console.log(this.props.isVisible)
        return ( 
                <div className="Section_****" >
                    <Row class="ContainerRow">
                        <Pod col="col-md-12" > 
                            <Title Title={this.props.Title}/>
                            <SubTitle Title={this.props.SubTitle} />
                        
                            <Row>
                                <Pod col="col-md-*" > 
                                        
                                </Pod>
                                <Pod col="col-md-*" > 
                                    
                                </Pod>
                            </Row>
                        </Pod>
                    </Row>
                </div> 
            )
        }
    } 