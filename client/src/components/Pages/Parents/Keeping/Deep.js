import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
//import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";

let PRIMARY,TITLES;
export default class Section_Rankings extends Component {
    componentWillMount() { 
        TITLES = this.props.LABELS 
        PRIMARY = this.props.PLAYER_DATA.Primary; 
      }
    render() {
        return (
            <Container>
                <SectionHeader PRIMARY={PRIMARY}  h1={TITLES.SITE.SUBS.STUMPINGS} h2={TITLES.SITE.TITLES.KEEPING}  /> 
                    Coming Soon
            </Container>
            )
        }
    }  