const InitialState ={

    Mobile:{
        MobileDrawerState:false,
    },

    Meta:{
        SETLANG:"EN"
    },
    Device:{
        isMobile:false
    },
    Desktop:{},
    FORMS:{
        SELECT:{
            YEAR:"Career"
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
            
            case "ISMOBILE":{
                return {...state, Device: {...state.Device, isMobile:action.payload}}
				// eslint-disable-next-line 
				break
            }
            case "SELECT_YEAR":{
                //console.log(action.payload);
				return {...state, FORMS: {...state.FORMS, SELECT:{...state.FORMS.SELECT, YEAR:action.payload} }}
				// eslint-disable-next-line 
				break
            } 
        }
		return state;
	}
export default UX;