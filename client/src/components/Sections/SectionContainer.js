import React from 'react';
import TrackVisibility from 'react-on-screen';


const SectionContainer = (props) => {
    return (
        <TrackVisibility once offset={100}>
            {props.children}
        </TrackVisibility>
    );
}

export default SectionContainer;