import React from 'react';

function ifNull(value){
    //console.log(value);
    if(value !== null || value !== undefined){
        //return  value.toString();
    }
    else{
        return "false"
    }
}

function values(value){
    //console.log(value)
}

const LoginState = props => (
        
        <div className="State">
           
                <ul>
                
                {
                    Object.keys(props.LOGIN.LoginState).map((item,i)=>{
                            return(
                                <li key={i}>
                                      {item} :   {ifNull(props.LOGIN.LoginState[item])}
                                </li>
                            )
                    })
                }

                {
                    Object.keys(props.LOGIN.LoginTeamState).map((item,i)=>{
                            return(
                                <li key={i}>
                                      {item} :   {ifNull(props.LOGIN.LoginTeamState[item])}
                                </li>
                            )
                    })
                }
                    {
                    Object.keys(props.LOGIN.LoginPlayerState).map((item,i)=>{
                            return(
                                <li key={i}>
                                      {item} :   {ifNull(props.LOGIN.LoginPlayerState[item])}
                                </li>
                            )
                    })}
                        
                  
                </ul>
                
        </div>

 );

 export default LoginState;