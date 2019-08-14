import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux'
import reducers from './reducers'
import {createStore} from 'redux'


let store = createStore(reducers)
const Root = ()=>{
    return(
        <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Provider>
    )
}

export default Root;