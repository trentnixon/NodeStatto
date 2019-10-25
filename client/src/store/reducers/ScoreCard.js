const InitialState ={
  SC_Loading:false,
  Scorecard:false,
  ScoreMeta:false, 
  ScoreCharts:false
}

const SCLoad = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
            // Fetching Statto Data

            case "SC_LOAD":{
                //console.log(action.payload);
				return {...state, SC_Loading:action.payload}
				// eslint-disable-next-line 
				break
            }
            case "SC_STORE_CARD":{
                //console.log(action.payload);
				return {...state, Scorecard:action.payload} 
				// eslint-disable-next-line 
				break
            }
            case "SC_STORE_META":{
                //console.log(action.payload);
				return {...state, ScoreMeta:action.payload}
				// eslint-disable-next-line 
				break
            }
            case "SC_STORE_CHARTS":{
                //console.log(action.payload);
				return {...state, ScoreCharts:action.payload}
				// eslint-disable-next-line 
				break
            }
            
        }
		return state;
	}
export default SCLoad;