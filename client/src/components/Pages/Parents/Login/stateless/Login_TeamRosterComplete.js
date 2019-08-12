import React from 'react';

// Stateless Components
import ResetButton from "./Login_ResetButton";

const TeamRosterComplete = props => (
    <div className="RosterLoadedHeader"> 
            <h1><strong>{props.TeamName}</strong> {props.LABELS.LOADING.PLAYERROSTER}</h1> 
            <ResetButton />
    </div>
 );
 export default TeamRosterComplete;