import React from 'react';
import TrackVisibility from 'react-on-screen';

const SectionContainer = (props) => {
  
    return (
        <TrackVisibility once offset={250} tag="section" className={props.className}> 
             {props.children}
        </TrackVisibility>
    );
} 

export default SectionContainer; 