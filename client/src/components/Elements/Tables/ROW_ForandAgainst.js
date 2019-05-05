import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class ROW_ForandAgainst extends Component {

    componentWillMount() {}
    render() {
        return (
            <TableRow >
                <TableCell valign="top"  align="left">
               <small>{this.props.Team} </small>
                </TableCell>
                <TableCell valign="top"  align="right">
                {this.props.Value}
                </TableCell>
            </TableRow>
            )
        }
    } 