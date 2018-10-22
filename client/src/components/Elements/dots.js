import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';


export default class Customers extends Component {

    createDot(num){
      
        let i = 0,indents = [];
                for (i=0; i < num; i++) {
                indents.push(
                    <Tooltip  key={i} title={this.props.Name + ' '+ this.props.Value}>  
                        <li style={{backgroundColor:this.props.UseColor}}>
                            <div></div>
                        </li>
                    </Tooltip>);
                }
        return indents;
    }

    render() {
            return(
                    <div>{this.createDot(this.props.ParseValue)}</div>
            )
    }
}