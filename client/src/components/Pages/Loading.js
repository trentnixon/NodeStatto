import React, { Component } from 'react';
import { FetchData } from "../../actions/Load";

const Content = new FetchData();

export default  class Loading extends Component {
    componentWillMount() {} 

    shouldComponentUpdate(){return true;}
    
    componentDidUpdate(nextProps, nextState){
            if( this.props.LOAD.UISTATE.STATTO === true )
                { 
                    Content.STOREUITRUE('INT_SET_UI_READY', true)
                }
            else
                {  
                    Content.SetStattoReady(this.props.LOAD.DATALOAD);
                }
    }
    
    render() {
        return(
            <div className="container-fluid" id="LoadingScreen">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
                <h2>{this.props.LOAD.Labels.ProgressReport}</h2>
            </div>
        )
    }
}