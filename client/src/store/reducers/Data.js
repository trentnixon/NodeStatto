const InitialState ={
    Data:null,
    BATTING:null,
    BATTING_NON:null,
    BOWLING:null,
    BOWLING_NON:null,
    KEEPING:null,
    KEEPING_NON_COUNTING:null,
    CLEAN:null,
    CURRENTNAME:null,
    CAREER:null
}

const LOAD = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){

            case "STORE_BATTING":{
                //console.log(action.payload);
				return {...state, BATTING:action.payload}
				// eslint-disable-next-line 
				break
            } 
            case "STORE_NON_COUNTING_BATTING":{
                //console.log(action.payload);
				return {...state, BATTING_NON:action.payload}
				// eslint-disable-next-line 
				break
            } 
            case "STORE_BOWLING":{
                //console.log(action.payload);
				return {...state, BOWLING:action.payload}
				// eslint-disable-next-line 
				break
            } 
            case "STORE_NON_COUNTING_BOWLING":{
                //console.log(action.payload);
				return {...state, BOWLING_NON:action.payload}
				// eslint-disable-next-line 
				break
            }
            case "STORE_KEEPING":{
                //console.log(action.payload);
				return {...state, KEEPING:action.payload}
				// eslint-disable-next-line 
				break
            } 
            case "STORE_NON_COUNTING_KEEPING":{
                //console.log(action.payload);
				return {...state, KEEPING_NON_COUNTING:action.payload}
				// eslint-disable-next-line 
				break
            } 
            
            case "STORE_CLEAN":{
                //console.log(action.payload);
				return {...state, CLEAN:action.payload}
				// eslint-disable-next-line 
				break
            }
            case "STORE_CAREER":{
                //console.log(action.payload);
				return {...state, CAREER:action.payload}
				// eslint-disable-next-line 
				break
            }
            case "CURRENTNAME":{
                //console.log(action.payload);
				return {...state, CURRENTNAME:action.payload}
				// eslint-disable-next-line 
				break
            } 
            
        }
		return state;
	}
export default LOAD;