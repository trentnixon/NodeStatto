import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
//import FormLabel from '@material-ui/core/FormLabel';
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";

import SubTitle from "../../../../Template/Page/Typography/PageSubTitle"

import {LW, Form_Select_League} from "../../../../../actions/UI/UI";

let LWMap;
export default class FORM_SELECT_LW extends Component {

    handleChange (event) {
        Form_Select_League(event.target.value)
      };

    componentWillMount() {  
        console.log(this.props.DATA.SelectedPlayer.Primary.CLEAN)
        LWMap = LW(this.props.DATA.SelectedPlayer.Primary.CLEAN)
    } 
    componentWillUpdate(){ return true;} 
    componentDidUpdate(nextProps, nextState){}
    render() {

        return (
            <Row className="PodRow Form_Selector LW flex-100"> 
            <SubTitle Title="League Weighting" />
                <Pod  className="flex-100" canvas="canvas1">
                
            <FormControl component="fieldset">
              <RadioGroup aria-label="position" name="position" value={parseFloat(this.props.UX.FORMS.SELECT.LEAGUE)} onChange={this.handleChange} row>
                        <FormControlLabel
                            value={0}
                            control={<Radio color="primary" />}
                            label="All"
                            labelPlacement="bottom"
                        />
                        {
                            LWMap.map((w,i)=>{
                            
                                let Checked = false
                                if(parseFloat(this.props.UX.FORMS.SELECT.LEAGUE) === w){
                                    Checked= true
                                }
                                return(
                                    <FormControlLabel
                                        checked={Checked}
                                        key={i}
                                        value={w}
                                        control={<Radio color="primary" />}
                                        label={w}
                                        labelPlacement="bottom"
                                    />
                                )
                            })
                        }
                        </RadioGroup>
                    </FormControl>
                </Pod>
            </Row>
          )
    }
}