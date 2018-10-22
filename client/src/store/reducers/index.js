import {combineReducers} from 'redux';
import LOAD from "./Load";
import DATA from "./Data";

export default combineReducers({
  LOAD:LOAD,
  DATA:DATA
})
