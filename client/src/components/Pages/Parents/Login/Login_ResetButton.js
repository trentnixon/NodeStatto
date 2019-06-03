import React from 'react';
import LinkIcon from '@material-ui/icons/SettingsBackupRestore'
import Button from '@material-ui/core/Button';
import {ResetLogin} from "../../../../actions/Login";



const Reset = (props) => (
    <Button  className="ResetLogin" onClick={ResetLogin}>
        {props.Label}
        <LinkIcon  />
      </Button>
    );
export default Reset;