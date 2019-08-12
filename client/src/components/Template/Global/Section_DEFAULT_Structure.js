import React, { Component } from './node_modules/react';

import Row from "../Page/Row";
import Pod from "../../Elements/pods/Pod_Outer_Wrapper";


import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";



export default class Section_Default extends Component {
    componentWillMount() {} 
    render() {
        //console.log(this.props.isVisible)
        return ( 
                <div className="Section_****" >
                    <Row class="ContainerRow">
                        <Pod col="" > 
                            <Title Title={this.props.Title}/>
                            <SubTitle Title={this.props.SubTitle} />
                        
                            <Row>
                                <Pod col="" > 
                                        
                                </Pod>
                                <Pod col="" > 
                                    
                                </Pod>
                            </Row>
                        </Pod>
                    </Row>
                </div> 
            )
        }
    } 