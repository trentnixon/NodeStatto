import React, { Component } from 'react';
import { FetchData } from "../../actions/Load";

const Content = new FetchData();
let LABEL;
export default  class Loading extends Component {
    componentWillMount() {} 

    shouldComponentUpdate(){return true;}
    
    componentDidUpdate(nextProps, nextState){
        //console.log("this.props.LOAD.UISTATE.STATTO" + this.props.LOAD.UISTATE.STATTO)
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
        LABEL=this.props.LABELS;
        return(
            <div className="container-fluid" id="LoadingScreen">
                    <div className="LoadingContainer">
                        <div className="lds-hourglass"></div> 
                        <h2>
                            {LABEL.LOADING.PRONOUN} {LABEL.LOADING.PLAYERPRONOUN}
                        </h2>
                    </div>
            </div>
        )   
    }
} 