import React, { Component } from 'react';

import FilterIcon from '@material-ui/icons/Autorenew'; 
import Button from '@material-ui/core/Button';
import {ResetFilter} from "../../../../../actions/UI/UI";

export default class FORM_SELECT_LW extends Component {
    handleChange () {  ResetFilter()};
    render() {

        return (
            <Button className="ChartMetaIcon" onClick={()=>{this.handleChange()}}>
                <FilterIcon />
            </Button>
          )
    }
}