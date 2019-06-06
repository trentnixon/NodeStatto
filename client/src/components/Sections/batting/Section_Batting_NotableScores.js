import React, { Component } from 'react';

// Template
import Row from "../../Template/Page/Row";
import Pod from "../../Elements/pods/Pod_Outer_Wrapper"

import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";


export default class Section_Rankings extends Component {
    componentWillMount() {}
    render() {
        return (
            <Row class="PodRow">
                 <SubTitle  Title="Notable Scores" />
                 <Pod canvas="canvas1">        
                    <Title Title="Notable Scores" />
                 </Pod>
            </Row>
            )
        }
    } 