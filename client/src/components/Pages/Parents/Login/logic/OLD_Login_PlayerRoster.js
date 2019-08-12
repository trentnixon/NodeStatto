import React, { Component } from 'react';
import TeamRosterList from "../../../../Elements/Lists/Login_Teamsheet";

export default  class Login extends Component {
  componentWillMount() { } 
  render() { 
      //console.log(this.props.LOGIN.SELECTEDSTORED )
      if(this.props.LOGIN.SELECTEDSTORED === true){
        return (  <TeamRosterList {... this.props}/> )
      } 
      else if(this.props.LOGIN.SELECTEDSTORED === 'fetching'){
        return (
            <div id="TeamSheet">
              <div className="Login_Msg">
                <div className="lds-hourglass"></div>
                    <p> <strong>{this.props.LABELS.LOADING.PRONOUN} {this.props.LABELS.LOADING.PLAYERROSTER} </strong></p> 
                </div>
            </div>
           )
      }
      else{
        return(<div></div>)
      }    
  }
} 