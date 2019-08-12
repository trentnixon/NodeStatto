import {combineReducers} from 'redux';
import LABELS from "./Statto_UI_Labels";
import LOAD from "./Statto_SwitchBoard";
import DATA from "./Statto_Data_Store";
import ScoreCard from "./ScoreCard";
import Chart_Variables from "./ChartVariables";
//import LOGIN from "./LOGIN";
import UX from "./UX";

export default combineReducers({
  LOAD:LOAD,
  DATA:DATA,
  SCORECARD:ScoreCard,
  //LOGIN:LOGIN,
  LABELS:LABELS,
  UX:UX,
  CHARTS:Chart_Variables
}) 
