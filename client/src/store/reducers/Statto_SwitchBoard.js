// Load Sequencing

/**
 * 
 *  This Reducer is used as a Sequence Switch Board.
 * 
 * 
 *  Load React
 *      > Fetch Teams
 *      > Load Team List
 *      > Display Form/Sselect Options
 *          > Fetch Team Roster
 *          > Display Team Roster
 *              > Select Player
 *              > Fetch Player Details
 *              > Ready UI
 *              > Load Player
 *              > Set UI Ready
 *          
 *  
 */

const InitialState ={
    UISTATE:{
        LoginSequence:{
            stage:{
                id:0,
                position:false
            }, // Int to test against
            stage1:false, // display form
            stage2:false, //team selected
            stage3:false, //player selected
            stage4:false, //Player Loaded 
            stage5:false, //UI Ready
        },
        StattoSequence:{
            LOGIN_COMPLETE:false,
            PLAYERDATA_RECIEVED:false,
            UI_READY:false, 
            STATTO:false,
            RESET:false 
        }                       
      },
    DATALOAD:{
            META:false,
            CLEAN:false, 
            CAREER:false,
            FORAGAINST:false,
    }, 
    ERRORS:{
            ERROR:false,
            IDERROR:false,
        },

}

const LOAD = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
// UI STATE 

                // Fetch Initial Meta Data
                case "INT_SET_UI_READY":{
                    return {...state, UISTATE: {...state.UISTATE, StattoSequence:{...state.UISTATE.StattoSequence, UI_READY:action.payload } }}
                    //return {...state, UISTATE: {...state.UISTATE, UI_READY:action.payload}}
                    // eslint-disable-next-line 
                break
                }
                case "INT_SET_STATTO_READY":{
                    return {...state, UISTATE: {...state.UISTATE, StattoSequence:{...state.UISTATE.StattoSequence, STATTO:action.payload } }}
                    //return {...state, UISTATE: {...state.UISTATE, UI_READY:action.payload}}
                    // eslint-disable-next-line 
                break
                }
                case "INT_SET_LOGIN_COMPLETE":{
                    return {...state, UISTATE: {...state.UISTATE, StattoSequence:{...state.UISTATE.StattoSequence, LOGIN_COMPLETE:action.payload } }}
                    //return {...state, UISTATE: {...state.UISTATE, UI_READY:action.payload}}
                    // eslint-disable-next-line 
                break
                }
                case "INT_SET_PLAYERDATA_RECIEVED":{
                    return {...state, UISTATE: {...state.UISTATE, StattoSequence:{...state.UISTATE.StattoSequence, PLAYERDATA_RECIEVED:action.payload } }}
                    //return {...state, UISTATE: {...state.UISTATE, UI_READY:action.payload}}
                    // eslint-disable-next-line 
                break
                }
            // LOGIN SEQUENCE
             case "LOGINSEQUENCE_STAGE_ID":{
                return {...state, UISTATE: {...state.UISTATE, LoginSequence:{...state.UISTATE.LoginSequence, stage:{...state.UISTATE.LoginSequence.stage, id:action.payload}} }}
                // eslint-disable-next-line 
                break
              }
              case "LOGINSEQUENCE_STAGE_POSITION":{
                return {...state, UISTATE: {...state.UISTATE, LoginSequence:{...state.UISTATE.LoginSequence, stage:{...state.UISTATE.LoginSequence.stage, position:action.payload}} }}
                // eslint-disable-next-line 
                break
              }
             case "LOGINSEQUENCE_INIT":{
                return {...state, UISTATE: {...state.UISTATE, LoginSequence:{...state.UISTATE.LoginSequence, stage1:action.payload} }}
                    // eslint-disable-next-line 
                break
              }
              case "LOGINSEQUENCE_STAGE2":{
                return {...state, UISTATE: {...state.UISTATE, LoginSequence:{...state.UISTATE.LoginSequence, stage2:action.payload} }}
                    // eslint-disable-next-line 
                break
              }
              case "LOGINSEQUENCE_STAGE3":{
                return {...state, UISTATE: {...state.UISTATE, LoginSequence:{...state.UISTATE.LoginSequence, stage3:action.payload} }}
                    // eslint-disable-next-line 
                break
              }
              case "LOGINSEQUENCE_STAGE4":{
                return {...state, UISTATE: {...state.UISTATE, LoginSequence:{...state.UISTATE.LoginSequence, stage4:action.payload} }}
                    // eslint-disable-next-line 
                break
              }
              case "LOGINSEQUENCE_STAGE5":{
                return {...state, UISTATE: {...state.UISTATE, LoginSequence:{...state.UISTATE.LoginSequence, stage5:action.payload} }}
                    // eslint-disable-next-line 
                break
              }

              
              
 // DATALOAD
            case "DATA_SET_LOAD_META":{
                return {...state, DATALOAD: {...state.DATALOAD, META:action.payload}}
                // eslint-disable-next-line 
                break
            }  
            case "DATA_SET_LOAD_CLEAN":{
                return {...state, DATALOAD: {...state.DATALOAD, CLEAN:action.payload}}
                // eslint-disable-next-line 
                break
            } 
            case "DATA_SET_LOAD_CAREER":{
                return {...state, DATALOAD: {...state.DATALOAD, CAREER:action.payload}}
                // eslint-disable-next-line 
                break
            } 
            case "DATA_SET_FORAGAINST":{
                return {...state, DATALOAD: {...state.DATALOAD, FORAGAINST:action.payload}}
                // eslint-disable-next-line 
                break
            }    
// ERRORS

            // Fetch Initial Meta Data
            case "IDERROR":{
                return {...state, ERRORS: {...state.ERRORS, IDERROR:action.payload}}
                 // eslint-disable-next-line 
                 break
             }
             case "ERROR":{
                return {...state, ERRORS: {...state.ERRORS, ERROR:action.payload}}
                 // eslint-disable-next-line 
                 break
             }
// Complete  State Reset
                case "COMPLETE_STATE_RESET":{
                    return {...state, UISTATE :InitialState.UISTATE }
                 
                    // eslint-disable-next-line 
                    break
                }
        }
		return state;
	}
export default LOAD;