const InitialState ={
    UISTATE:{
            Int_Loading:false,
            Int_Data_Received:false,
            UI_READY:false, 
            STATTO:false,
            RESET:false            
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
    Labels:
            {
            ProgressReport:"Fetching Data"
            }
}

const LOAD = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
// UI STATE
                case "INT_LOAD":{
                    return {...state, UISTATE: {...state.UISTATE, Int_Loading:action.payload}}
                    // eslint-disable-next-line 
                    break
                }
                case "INT_DATA_TRUE":{
                    return {...state, UISTATE: {...state.UISTATE, Int_Data_Received:action.payload}}
                    // eslint-disable-next-line 
                    break
                }
                
                // Fetch Initial Meta Data
                case "INT_SET_UI_READY":{
                    return {...state, UISTATE: {...state.UISTATE, UI_READY:action.payload}}
                    // eslint-disable-next-line 
                break
                }
                // Fetch Initial Meta Data
                case "INT_SET_SATTTO_TRUE":{
                    return {...state, UISTATE: {...state.UISTATE, STATTO:action.payload}}
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
// MESSAGES
            // Fetch Initial Meta Data
            case "SET_UI_MESG":{
                return {...state, Labels: {...state.ProgressReport, ProgressReport:action.payload}}
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
        }
		return state;
	}
export default LOAD;