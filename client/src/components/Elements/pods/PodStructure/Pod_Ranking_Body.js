import React from 'react';

const PodFooter = (props) => (
        <div className="Body">
            <h2>{this.value(props.total,1) } {this.FindArrow(props.total)}</h2>  
            <h3>Previous: {this.value(props.total,2)}</h3>
        </div>
    );
export default PodFooter;