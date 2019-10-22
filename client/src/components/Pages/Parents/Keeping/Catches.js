import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";

// Sections

import Overview from './Sections/Section_Keeping_Catches_Overview';
import OverTheYears from "./Sections/Section_Keeping_Catches_OverTheYears";
import YearsOverMonths from "./Sections/Section_Keeping_Catches_BarByMonthOverYear";


let PRIMARY,TITLES;
export default class Section_Rankings extends Component {
    componentWillMount() { 
        TITLES = this.props.LABELS 
        PRIMARY = this.props.PLAYER_DATA.Primary; 
 
      }
    render() {
        //console.log(this.props);
        return (
            <Container>
            <SectionHeader   h1={TITLES.SITE.SUBS.CATCHES} h2={TITLES.SITE.TITLES.KEEPING}  />
                <SectionContainer className="Section_Keeping_Wickets todo">
                    <Overview DATA={PRIMARY} TITLES = {TITLES.SITE.TITLES} SUBS={TITLES.SITE.SUBS}/>
                </SectionContainer>
                <SectionContainer className="Section_Keeping_Wickets todo">
                    <OverTheYears TITLE={TITLES} DATA={PRIMARY.CAREER.Career.Keeping} />
                </SectionContainer>
                <SectionContainer className="Section_Keeping_Wickets todo">
                    <YearsOverMonths TITLE={TITLES} DATA={PRIMARY.CAREER.Career.Keeping} />
                </SectionContainer>
            </Container>
            )
        }  
    }  