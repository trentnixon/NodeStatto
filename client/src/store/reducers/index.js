import {combineReducers} from 'redux';
import LOAD from "./Load";
import DATA from "./Data";
import ScoreCard from "./ScoreCard";
import LOGIN from "./LOGIN";

export default combineReducers({
  LOAD:LOAD,
  DATA:DATA,
  SC:ScoreCard,
  LOGIN:LOGIN
})
