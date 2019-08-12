const InitialState ={
    SetUpData:{
        GoogleTeamList:false,
        SelectTeamID:false,
        SelectTeamRoster:false,
        SelectedPlayerID:false
    },
    SelectedPlayer:{
        Primary:{
            PlayerName:false,
            PlayerID:false,
            Meta:false,
            CAREER:null, 
            FOR:null,
            AGAINST:null, 
            CLEAN:null,
        },
        Comparision1:{
            PlayerName:false,
            PlayerID:false, 
            CAREER:null,
            FOR:null,
            AGAINST:null, 
            CLEAN:null,
        },
        Comparision2:{
            PlayerName:false,
            PlayerID:false,
            CAREER:null,
            FOR:null,
            AGAINST:null, 
            CLEAN:null,
        },
        Comparision3:{
            PlayerName:false,
            PlayerID:false,
            CAREER:null,
            FOR:null,
            AGAINST:null, 
            CLEAN:null,
        }
    }
}
 
const LOAD = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
            
            // Statto UI Setup Data:
            // Team List from Google Drive
            // Store Selected Team ID
            case "DATA_STORE_GOOGLE_TEAM_LIST":{
                return {...state, SetUpData: {...state.SetUpData, GoogleTeamList:action.payload }}
                    // eslint-disable-next-line 
                break
              }
            case "DATA_STORE_SELECTED_TEAM_ID":{
                return {...state, SetUpData: {...state.SetUpData, SelectTeamID:action.payload }}
                    // eslint-disable-next-line 
                break
              }
            case "DATA_STORE_SELECTED_TEAM_ROSTER":{
                return {...state, SetUpData: {...state.SetUpData, SelectTeamRoster:action.payload }}
                    // eslint-disable-next-line 
                break
              }
            case "DATA_STORE_SELECTED_PLAYER_ID":{
                return {...state, SetUpData: {...state.SetUpData, SelectedPlayerID:action.payload }}
                    // eslint-disable-next-line 
                break
              }
              
             
              
// *********************************************************** */
    
    // Store Primary Player Data

              case "DATA_STORE_PRIMARY_PLAYER_ID":{
                return {...state, SelectedPlayer: {...state.SelectedPlayer, Primary:{...state.SelectedPlayer.Primary, PlayerID:action.payload} }}
                    // eslint-disable-next-line 
                break
              }
                case "DATA_STORE_PRIMARY_META":{
                return {...state, SelectedPlayer: {...state.SelectedPlayer, Primary:{...state.SelectedPlayer.Primary, Meta:action.payload} }}
                    // eslint-disable-next-line 
                break
              }
              case "DATA_STORE_PRIMARY_CLEAN":{
                //console.log(action.payload);
                
                return {...state, SelectedPlayer: {...state.SelectedPlayer, Primary:{...state.SelectedPlayer.Primary, CLEAN:action.payload} }}
            
				// eslint-disable-next-line 
				break
            }
              case "DATA_STORE_PRIMARY_CAREER":{
                //console.log(action.payload);
                return {...state, SelectedPlayer: {...state.SelectedPlayer, Primary:{...state.SelectedPlayer.Primary, CAREER:action.payload} }}
            
				// eslint-disable-next-line 
				break
            }

            case "DATA_STORE_PRIMARY_FOR":{
                //console.log(action.payload);
                return {...state, SelectedPlayer: {...state.SelectedPlayer, Primary:{...state.SelectedPlayer.Primary, FOR:action.payload} }}
            
				// eslint-disable-next-line 
				break
            }
            case "DATA_STORE_PRIMARY_AGAINST":{
                //console.log(action.payload);
                return {...state, SelectedPlayer: {...state.SelectedPlayer, Primary:{...state.SelectedPlayer.Primary, AGAINST:action.payload} }}
				// eslint-disable-next-line 
				break
            } 
            case "DATA_STORE_PRIMARY_NAME":{
                //console.log(action.payload);
                return {...state, SelectedPlayer: {...state.SelectedPlayer, Primary:{...state.SelectedPlayer.Primary, PlayerName:action.payload} }}
				// eslint-disable-next-line 
				break
            }   
// *********************************************************** */
            
        }
		return state;
	}
export default LOAD;