/**
 * COmponents Example 
 * 
 *  <SELECTYEAR 
        TITLE={this.props.LABELS.SITE} 
        {... this.props}
    />
 */

import React, { Component } from 'react';

// Template
import Row from "../../../Template/Page/Row";
import Pod from "../../../Elements/pods/Pod_Outer_Wrapper";

// Form 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

// Action 
import {Form_Select_Year} from "../../../../actions/UI";
import {GA_Form_Select_Year} from "../../../../actions/ga";

// Start Class 
export default class FORM_SELECT_YEAR extends Component {

    state = {
        labelWidth: 100,
        Value:"Select an Option",
      }


 
    // Form Handling
    handleChange = event => { 
        Form_Select_Year(event.target.value) 
        GA_Form_Select_Year(event.target.value)
    }
    componentWillMount() {  } 

    render() {
        console.log(this.props.TITLE)
        return (
                <Row className="PodRow Form_Selector flex-100"> 
                    <Pod  className="flex-50" canvas="">  
                        <FormControl variant="outlined" className="YearSelector" >
                            <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-year-simple"> 
                                {this.props.TITLE.FORM.INPUTLABELS.VARIABLE}
                            </InputLabel>
                                <Select
                                    value={this.props.UX.FORMS.SELECT.YEAR}  
                                    onChange={this.handleChange}
                                    input={ <OutlinedInput 
                                                labelWidth={this.state.labelWidth}
                                                name="Year"
                                                id="outlined-year-simple"
                                                value={this.props.UX.FORMS.SELECT.YEAR}
                                            />
                                        }
                                >
                                        <MenuItem value="Career" >{this.props.LABELS.SITE.TITLES.CAREER}</MenuItem>
                                        {
                                            this.props.PLAYER_DATA.Primary.CAREER.Career.batting.overTheYears.map((year,i)=>{
                                                return(
                                                        <MenuItem key={i} value={year.int}>{year.int}</MenuItem>
                                                )
                                            })
                                        }
                                </Select>
                    </FormControl>
                </Pod>
            </Row>
        ) 
    }
} 