import { combineReducers } from 'redux';
import worldTotal from './WorldTotal';
import countries from './Countries';

export default combineReducers({
  // your reducers will go here
  worldTotal,
  countries
})