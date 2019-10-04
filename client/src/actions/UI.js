import store from "../store/index"
import history from  '../History';
//import { Route } from 'react-router-dom'

export function UXDrawer(value){
    store.dispatch({ type:"MobileDrawerState", payload:value});
} 

export function ISMOBILE(value){
    store.dispatch({ type:"ISMOBILE", payload:value});
}

export function Form_Select_Year(value){
    store.dispatch({ type:"SELECT_YEAR", payload:value});
}