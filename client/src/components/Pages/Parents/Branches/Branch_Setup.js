import React, { Component } from 'react';
import {connect } from 'react-redux';
import {fetchSheets,StattoReady} from "../../../../actions/Setup_Statto_UI"
// Select Player
import FindPlayer from "../Login/Login";
import Statto from "../../Main";

 
let SetLang="EN", BranchState=null;

const THISLOGIN = new fetchSheets(); 

class Branch1 extends Component { 
  componentWillMount() { THISLOGIN.fetch(window.gapi.load); } 
  
  UISetupState(LOADSEQUENCE){
    if(LOADSEQUENCE.LoginSequence.stage1=== true &&
      LOADSEQUENCE.LoginSequence.stage2=== true &&
      LOADSEQUENCE.LoginSequence.stage3=== true &&
      LOADSEQUENCE.LoginSequence.stage4=== true &&
      LOADSEQUENCE.LoginSequence.stage5=== false
      ){
        //console.log("STATTO READY");
        StattoReady();
      }
  }
  render() { 

    // This variable will need changing
    BranchState = this.props.LOADSEQUENCE.StattoSequence.LOGIN_COMPLETE; 
   
    console.log(this.props)
   
    if(BranchState !== true){
        this.UISetupState(this.props.LOADSEQUENCE);
        return (
                <div id="branch1" className="false">
                    <FindPlayer  {... this.props}/>
                </div>
           )
    }
    else{
        return(
            <div id="branch1" className="true">
                <Statto {... this.props}/>
            </div> 
        ) 
    }
  }
}  
 
const mapStateToProps = (state) => ({ 
  ERRORS:state.LOAD.ERRORS,
  LOADSEQUENCE:state.LOAD.UISTATE, 
  DATA_SETUP:state.DATA.SetUpData,
  PLAYER_DATA:state.DATA.SelectedPlayer,
  STATTODATA:state.DATA,
  LABELS:state.LABELS.lANG[SetLang],
  UX:state.UX,
})
export default connect(mapStateToProps)(Branch1); 