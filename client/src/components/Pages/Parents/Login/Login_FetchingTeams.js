import React from 'react';

const FetchingTeams = props => (
    <div className="Login_Msg">
           <div className="lds-hourglass"></div>
           <p>{props.LABELS.LOADING.PRELOADTEAMS}</p> 
    </div>
 );

 export default FetchingTeams;