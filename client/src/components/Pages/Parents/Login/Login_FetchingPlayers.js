import React from 'react';

const FetchingTeams = props => (
    <div className="Login_Msg">
           <div className="lds-hourglass"></div>
           <p>Fetching <strong>{props.TeamName} </strong>Player Roster </p> 
    </div>
 );

 export default FetchingTeams;