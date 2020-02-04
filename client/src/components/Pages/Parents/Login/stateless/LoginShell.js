import React from 'react';

// import LoginState from "./Login_State";
import LoginHeader from "./Login_Header";

/*
const display = (props)=>{

    if(props.PLAYER_DATA.Primary.CLEAN){
        console.log(props)
        console.log(props.PLAYER_DATA.Primary.CLEAN.length)
        return props.PLAYER_DATA.Primary.CLEAN.length;
        }

    }
    */
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