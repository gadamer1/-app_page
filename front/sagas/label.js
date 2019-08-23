import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { LOAD_LABELLIST_REQUEST, LOAD_LABELLIST_SUCCESS, LOAD_LABELLIST_FAILURE, POST_LABELLIST_REQUEST, POST_LABELLIST_SUCCESS } from '../reducers/label';

function loadLabelListAPI() {
    return axios.get('/label/list');
}

function* loadLabelList() {
    try {
        const result = yield call(loadLabelListAPI);
        yield console.log(result)
        yield put({
            type: LOAD_LABELLIST_SUCCESS,
            data: result.data,
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_LABELLIST_FAILURE,
            error: e,
        })
    }
}

function* watchLoadLabelList() {
    yield takeLatest(LOAD_LABELLIST_REQUEST, loadLabelList)
}

function postLabelListAPI(label) {
    return axios.post('/label/list', { label });
}

function* postLabelList(action) {
    try {
        const result = yield call(postLabelListAPI, action.data);
        yield console.log(result)
        yield put({
            type: POST_LABELLIST_SUCCESS,
            data: result.data,
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: POST_LABELLIST_FAILURE,
            error: e,
        })
    }
}

function* watchPostLabelList() {
    yield takeLatest(POST_LABELLIST_REQUEST, postLabelList)
}

export default function* labelSaga() {
    yield all([
        fork(watchLoadLabelList),
        fork(watchPostLabelList),

    ])
}