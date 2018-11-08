import React from 'react';
import { Link } from "react-router-dom";

const DevRouter = (props) => (
    <div className="DevRouter">
            <h3>Developer</h3>
            <Link to={`/${props.match.params.playerid}/dev/datatable`}>Data Table</Link> 
    </div>
);

export default  DevRouter;