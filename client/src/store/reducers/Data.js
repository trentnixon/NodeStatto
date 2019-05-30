const InitialState ={
    CLEAN:null,
    META:{
        Name:null,
        ID:null
    },
    CAREER:null,
    FOR:null,
    AGAINST:null,    
    LOGIN:null
}
 
const LOAD = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
            
            case "STORE_FOR":{
                //console.log(action.payload);
				return {...state, FOR:action.payload}
				// eslint-disable-next-line 
				break
            } 

            case "STORE_AGAINST":{
                //console.log(action.payload);
				return {...state, AGAINST:action.payload}
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

           /** Store Meta */
           case "STORE_META":{
            return {...state, META:action.payload}
            // eslint-disable-next-line 
            break
            }

            /** Store LOGIN Auto Complete options */
            case "SHEET_STORED":{
                return {...state, META:action.payload}
                // eslint-disable-next-line 
                break
                }
            
        }
		return state;
	}
export default LOAD;