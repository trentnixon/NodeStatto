const InitialState ={

    Mobile:{
        MobileDrawerState:false,
    },

    Meta:{
        SETLANG:"EN"
    },
    Desktop:{}
   
}
 
const UX = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){

            case "CHANGELANGUAGE":{
                return {...state, Meta: {...state.Meta, SETLANG:action.payload}}
                    // eslint-disable-next-line 
                break
            }
            case "MobileDrawerState":{
                //console.log(action.payload);
				return {...state, Mobile: {...state.Mobile, MobileDrawerState:action.payload}}
				// eslint-disable-next-line 
				break
            }            
        }
		return state;
	}
export default UX;