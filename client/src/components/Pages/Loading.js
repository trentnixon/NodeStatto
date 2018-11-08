import React, { Component } from 'react';
import { FetchData } from "../../actions/Load";
import { FormGuide } from  "../../actions/FormGuide";

const Content = new FetchData();


export default  class Loading extends Component {
    componentWillMount() {} 

    shouldComponentUpdate(){return true;}
    
    componentDidUpdate(nextProps, nextState){

           if( this.props.DATA.BATTING !== null &&
                this.props.DATA.BATTING_NON !== null &&
                this.props.DATA.BOWLING !== null &&
                this.props.DATA.BOWLING_NON !== null &&
                this.props.DATA.KEEPING !== null &&
                this.props.DATA.KEEPING_NON_COUNTING !== null &&
                this.props.LOAD.DATA_CLEAN === false
            ){
              

                Content.Clean(this.props.DATA.BATTING,1);
                Content.Clean(this.props.DATA.BATTING_NON,1);
                Content.Clean(this.props.DATA.BOWLING,2);
                Content.Clean(this.props.DATA.BOWLING_NON,2);
                Content.Clean(this.props.DATA.KEEPING,3);
                Content.Clean(this.props.DATA.KEEPING_NON_COUNTING,3);
                
            }else if(this.props.DATA.CLEAN !== null){ 
                
                console.log(this.props);

                if(this.props.DATA.CAREER === null){
                    FormGuide(this.props.DATA.CLEAN);
                }else{
                    Content.ReadyUI();
                }
                
            }
    }
    
    render() {
       // console.log(this.props)
        return(
            <div className="container-fluid" id="LoadingScreen">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
                <h2>{this.props.LOAD.Labels.ProgressReport}</h2>
            </div>
        )
    }
}