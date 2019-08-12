// Private Functions
import store from "../store/index"

export function LoginSequence(arr){
    
    arr.map((Value,i)=>{
       store.dispatch({ type:Value.Type, payload:Value.Value });
       return true;
    })
}
