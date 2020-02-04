import React, { Component } from 'react';

// Template
import Row from "../../../../../Template/Page/Row";
import Pod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic"

import Title from "../../../../../Template/Page/Typography/PageTitle";


export default class Section_Rankings extends Component {
    componentWillMount() {

    }
    render() {
        return (
            <Row className="PodRow">
                    <Title Title="Balls Faced Against Runs Scored" />
                     <Pod class ="flex-100" canvas="canvas1"> 
                        <Title Title="Runs to Balls Faced" />
                    </Pod>
                </Row>            
            )
        }
    } 