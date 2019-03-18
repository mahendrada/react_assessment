import { takeLatest, call, put } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watchDroneLocation() {
  yield takeLatest(actions.FETCH_DRONE_LOCATIONS, workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const { data, error } = yield call(API.getDroneLocations);

    if (error) {
      yield put({ type: actions.FETCH_DRONE_LOCATIONS_FAILURE, error });
    }

    // dispatch a success action to the store with the new dog
    yield put({ type: actions.FETCH_DRONE_LOCATIONS_SUCCESS, payload: data });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    if (error) {
      yield put({ type: actions.FETCH_DRONE_LOCATIONS_FAILURE, error });
    }
  }
}

export default [watchDroneLocation];