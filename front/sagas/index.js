import { all, fork } from 'redux-saga/effects'
import label from './label';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080/api';


export default function* rootSaga() {
    yield all([
        fork(label),
    ])
}