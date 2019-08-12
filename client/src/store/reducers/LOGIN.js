const InitialState ={ 
    LoginState:{
        Login:false,
        LoginSelectableTeamList:false,
        LoginComplete:false,
    },
    LoginTeamState:{
        TeamId:false,
        TeamName:false,
        TeamRoster:false,
        TeamComplete:false
    },
    LoginPlayerState:{
        PlayerId:false,
        PlayerName:false,
        playerData:false,
        PlayerComplete:false
    },  

   
}

const LOGIN = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
    
            /** Store LOGIN Auto Complete options */
            // LOGIN UI STATE
            /*
            case "SHEET_STORED":{
                //return {...state, LOGIN:action.payload}
                return {...state, LoginState: {...state.LoginState, Login:action.payload}}
                // eslint-disable-next-line 
                break
                }
             /*   
            case "SAVE_SHEET":{ 
              //return {...state, LOGINDATA:action.payload}
              return {...state, LoginState: {...state.LoginState, LoginSelectableTeamList:action.payload}}
                    // eslint-disable-next-line 
                    break
            }
           
            case "LOGINCOMPLETE":{
              //return {...state, LOGINDATA:action.payload}
              return {...state, LoginState: {...state.LoginState, LoginComplete:action.payload}}
                    // eslint-disable-next-line 
                    break
            }
 */
           
            
            // Login Team State
            /*
            case "SAVE_SELECTED_ID":{
                //return {...state, SELECTEDTEAMID:action.payload}
                return {...state, LoginTeamState: {...state.LoginTeamState, TeamId:action.payload}}
                      // eslint-disable-next-line 
                      break
              }
            */
           /*
              case "SAVE_SELECTED_NAME":{
                //return {...state, SELECTEDTEAMNAME:action.payload}
                return {...state, LoginTeamState: {...state.LoginTeamState, TeamName:action.payload}}
                      // eslint-disable-next-line 
                      break
              }
*/
              /*
              case "SAVE_SELECTED_TEAMLIST":{
                //return {...state, SELECTEDTEAMLIST:action.payload}
                return {...state, LoginTeamState: {...state.LoginTeamState, TeamRoster:action.payload}}
                
                      // eslint-disable-next-line 
                      break
              }*/

              /*
              case "SELECTED_STORED":{
                return {...state, SELECTEDSTORED:action.payload}
                      // eslint-disable-next-line 
                      break
              }
*/

              // Login Player State

        }
		return state;
	}
export default LOGIN;