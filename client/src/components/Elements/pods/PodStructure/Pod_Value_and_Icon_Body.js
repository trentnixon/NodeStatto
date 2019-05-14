import React from 'react';

const PodValueIconBody = (props) => (
        <div className="Body">
            <h2>{props.TopLine} {props.Icon}</h2>  
            <h3>{props.BottomLine}</h3>
        </div>
    );
export default PodValueIconBody;