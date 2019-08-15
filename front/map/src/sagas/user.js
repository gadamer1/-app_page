import {fork, takeLatest,put} from 'redux-saga/effects'
import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT_REQUEST} from '../reducers/user'

function* userLogin(action){
    try{
        yield put({
            type: USER_LOGIN_SUCCESS,
            data: action.data
        })
    }catch(e){
        console.error(e)
        yield put({
            type: USER_LOGIN_FAILURE
        })
    }
}

function* watchLogin(){
    yield takeLatest(USER_LOGIN_REQUEST,userLogin)
}

function* userLogout(){
    try{
        yield put({
            type: USER_LOGOUT_SUCCESS,
        })
    }catch(e){
        console.error(e)
        yield put({
            type: USER_LOGOUT_FAILURE
        })
    }
}

function* watchLogout(){
    yield takeLatest(USER_LOGOUT_REQUEST,userLogout)
}


export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogout)
    ])
}