import { takeEvery , takeLatest} from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import{ getWorldTotal } from './WorldTotalSaga';
import { getCountries } from './CountriesSaga';

export function* watchWorldTotal(){
  //example for yield all
  // yield all([
  //   yield takeEvery(actionTypes.WORLD_TOTAL_FETCH, getWorldTotal),
  //   yield takeEvery(actionTypes.WORLD_TOTAL_FETCH, getWorldTotal),
  //   yield takeEvery(actionTypes.WORLD_TOTAL_FETCH, getWorldTotal)
  // ])
  yield takeEvery(actionTypes.WORLD_TOTAL_FETCH, getWorldTotal);
}

export function* watchCountries(){
  // To take onlyone process to occur
  // yield takeLatest(actionTypes.COUNTRIES_FETCH, getCountries);
  yield takeEvery(actionTypes.COUNTRIES_FETCH, getCountries);
}