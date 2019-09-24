import store from "../store/index"

export function UXDrawer(value){
    store.dispatch({ type:"MobileDrawerState", payload:value});
} 

export function ISMOBILE(value){
    store.dispatch({ type:"ISMOBILE", payload:value});
}