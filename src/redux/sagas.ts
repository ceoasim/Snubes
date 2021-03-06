
import { all, call, spawn } from '@redux-saga/core/effects'
import userSaga from './user/saga'

function* rootSaga () {
  const sagas = [
    userSaga
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break;
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}

export default rootSaga;