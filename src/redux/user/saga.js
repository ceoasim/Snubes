import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { SAMPLE_TYPE } from "./types";

function* sampleType() {

  try {
    console.log("Sample saga")
  }

  catch (err) {
    console.log("error", err);;
  }
}

function* mySaga() {
  yield takeLatest(SAMPLE_TYPE, sampleType);

}
export default mySaga;
