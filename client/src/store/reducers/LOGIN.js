const InitialState ={   
    LOGIN:null,
    LOGINDATA:null,
    SELECTEDSTORED:null,
    SELECTEDTEAMID:null,
    SELECTEDTEAMNAME:null,
    SELECTEDTEAMLIST:null
}

const LOGIN = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
    
            /** Store LOGIN Auto Complete options */
            case "SHEET_STORED":{
                return {...state, LOGIN:action.payload}
                // eslint-disable-next-line 
                break
                }
            case "SAVE_SHEET":{
              return {...state, LOGINDATA:action.payload}
                    // eslint-disable-next-line 
                    break
            }
            
            case "SELECTED_STORED":{
                return {...state, SELECTEDSTORED:action.payload}
                      // eslint-disable-next-line 
                      break
              }

            case "SAVE_SELECTED_ID":{
                return {...state, SELECTEDTEAMID:action.payload}
                      // eslint-disable-next-line 
                      break
              }
              case "SAVE_SELECTED_NAME":{
                return {...state, SELECTEDTEAMNAME:action.payload}
                      // eslint-disable-next-line 
                      break
              }
              case "SAVE_SELECTED_TEAMLIST":{
                return {...state, SELECTEDTEAMLIST:action.payload}
                      // eslint-disable-next-line 
                      break
              }
        }
		return state;
	}
export default LOGIN;