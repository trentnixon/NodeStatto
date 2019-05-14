import React from 'react';

const PodHeader = (props) => (
            <div className="Header"> 
                <h1>{props.icon} {props.label}</h1>
            </div>
    );
export default PodHeader;