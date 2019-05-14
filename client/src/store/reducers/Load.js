const InitialState ={
  Int_Loading:false,
  DATA_CLEAN:false,
  CAREER:false,
  UI_READY:false, 
  RESET:false,
  ERROR:false,
  IDERROR:false,
  Labels:
        {
            ProgressReport:"Fetching Data"
        }
}

const LOAD = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
            // Fetching Statto Data

            case "INT_LOAD":{
                //console.log(action.payload);
				return {...state, Int_Loading:action.payload}
				// eslint-disable-next-line 
				break
            }
            
            case "DATA_CLEAN":{
               //console.log(action.payload);
				return {...state, DATA_CLEAN:action.payload}
				// eslint-disable-next-line 
				break
            }
            case "DATA_CAREER":{
                //console.log(action.payload);
                 return {...state, CAREER:action.payload}
                 // eslint-disable-next-line 
                 break
             }

            // Fetch Initial Meta Data
            case "SET_UI_READY":{
                    //console.log(action.payload);
                    return {...state, UI_READY:action.payload}
                    // eslint-disable-next-line 
                    break
                }
            
            // Fetch Initial Meta Data
            case "SET_UI_MESG":{
               //console.log(action.payload);
                return {...state, Labels: {...state.ProgressReport, ProgressReport:action.payload}}
                // eslint-disable-next-line 
                break
            }
            // Fetch Initial Meta Data
            case "IDERROR":{
                //console.log(action.payload);
                return {...state, IDERROR:action.payload}
                 // eslint-disable-next-line 
                 break
             }
        }
		return state;
	}
export default LOAD;