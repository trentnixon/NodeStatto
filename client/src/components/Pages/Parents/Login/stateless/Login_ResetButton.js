import React from 'react';
import LinkIcon from '@material-ui/icons/SettingsBackupRestore'
import Button from '@material-ui/core/Button';
//import {ResetLogin} from "../../../../../actions/PreRender/Setup_Statto_UI";


const Reset = (props) => (
    <Button  className="ResetLogin" >
        {props.Label}
        <LinkIcon  />
      </Button>
    );
export default Reset;