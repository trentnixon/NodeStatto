import {combineReducers} from 'redux';
import LABELS from "./Labels";
import LOAD from "./Load";
import DATA from "./Data";
import ScoreCard from "./ScoreCard";
import LOGIN from "./LOGIN";
import UX from "./UX";

export default combineReducers({
  LOAD:LOAD,
  DATA:DATA,
  SC:ScoreCard,
  LOGIN:LOGIN,
  LABELS:LABELS,
  UX:UX
})
