import React, { Component } from 'react';

import Container from "../../../Template/Page/Containers/Container";
import SectionHeader from "../../../Template/Page/Structure/Structure_Page_Header_Main";

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