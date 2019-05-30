import React from 'react';

const FetchingTeams = props => (
    <div className="Login_Msg">
           <div className="lds-hourglass"></div>
           <p>{props.LABELS.LOADING.PRONOUN} <strong>{props.TeamName} </strong>{props.LABELS.LOADING.PLAYERROSTER}</p> 
    </div>
 );

 export default FetchingTeams; 