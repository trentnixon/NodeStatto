import React from 'react';

const FetchingTeams = props => (
    <div className="Login_Msg">
           <div className="lds-hourglass"></div>
           <p>{props.PRONOUN} {props.Label}</p> 
    </div>
 );

 export default FetchingTeams;