const InitialState ={

    Mobile:{
        MobileDrawerState:false,
    },

    Meta:{
        SETLANG:"EN"
    },
    Desktop:{},
    FORMS:{
        SELECT:{
            YEAR:"Career",
            LEAGUE:"*"
        }
    }
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
            case "SELECT_YEAR":{
                //console.log(action.payload);
				return {...state, FORMS: {...state.FORMS, SELECT:{...state.FORMS.SELECT, YEAR:action.payload} }}
				// eslint-disable-next-line 
				break
            }  
            case "SELECT_LEAGUE":{
                //console.log(action.payload);
				return {...state, FORMS: {...state.FORMS, SELECT:{...state.FORMS.SELECT, LEAGUE:action.payload} }}
				// eslint-disable-next-line 
                break
                
            }           
        }
		return state;
	}
export default UX;