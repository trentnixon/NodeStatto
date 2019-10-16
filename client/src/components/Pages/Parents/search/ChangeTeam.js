import React, { Component } from 'react';
// import {connect } from 'react-redux';
// Sections
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionP from "../../../Template/Global/Section_Global_Paragraph";
import Button from '@material-ui/core/Button';
import {TeamName} from "../../../../actions/UI"

// Actions
import {ResetTeams, ResetLogin} from "../../../../actions/Setup_Statto_UI";

export default class Search extends Component {

    constructor(props) { 
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
      }

  componentWillMount() {}

  handleToggle(){
    ResetTeams();
    ResetLogin();
    this.props.history.push(`/`);
  }

  render() {

    return (
       
            <Container>
                <SectionHeader h1="Select a New Team" h2={"Currently Selected : " +  TeamName(this.props.STATTODATA.SetUpData.SelectTeamID)}/> 
                <SectionP copy="Change the current Selected Team " />
                
                    <Button variant="contained" className="ChangeBut" onClick={this.handleToggle}>
                        Confirm Change
                    </Button>
            </Container>
 
    )
  }
} 