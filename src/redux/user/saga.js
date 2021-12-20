import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { ADD_INFO, SAMPLE_TYPE } from "./types";
import * as Actions from './actions'

function* addInfo(action) {

  try {
    yield put(Actions.addInfoSuccess(action.payload))
  }

  catch (err) {
    console.log("error", err);;
  }
}

function* mySaga() {
  yield takeLatest(ADD_INFO, addInfo);

}
export default mySaga;
