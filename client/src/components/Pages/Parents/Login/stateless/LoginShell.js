import React from 'react';

// import LoginState from "./Login_State";
import LoginHeader from "./Login_Header";

const LoginShell = props => (
    <div id="Login">
        <LoginHeader {... props}/>
              <div className="LoginFormContainer">
                <div className="LoginInner">
                <div id="FormInput">
                        {props.children}
                </div>
                </div>
            </div>
    </div>
 );

 export default LoginShell; 