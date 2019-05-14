import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '../Buttons/ShowMore';


export default class ROW_ForandAgainst extends Component {

    componentWillMount() {}
    render() {
        return (
            <TableRow >
                <TableCell valign="top"  align="right"> 
                  {this.props.Team}
                </TableCell>
                <TableCell valign="top"  align="left">
                    {this.props.Value}
                </TableCell>
                <TableCell valign="top"  align="right">
                        <Button 
                        Label=""
                        class=" CTA ButtonRight"
                        Player={this.props.match.params.playerid}
                        Path={'history/'+this.props.Path+'/'+this.props.ID}
                    />
                </TableCell>
            </TableRow>
            )
        }
    } 