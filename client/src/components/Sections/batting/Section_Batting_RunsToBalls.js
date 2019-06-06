import React, { Component } from 'react';

// Template
import Row from "../../Template/Page/Row";
import Pod from "../../Elements/pods/Pod_Outer_Wrapper"
import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";


export default class Section_Rankings extends Component {
    componentWillMount() {

    }
    render() {
        return (
            <Row class="PodRow">
                    <Title Title="Balls Faced Against Runs Scored" />
                     <Pod class ="flex-100" canvas="canvas1"> 
                        <Title Title="Runs to Balls Faced" />
                    </Pod>
                </Row>            
            )
        }
    } 