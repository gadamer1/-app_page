import React from 'react'
import {useSelector} from 'react-redux'
import {LoginForm} from '../components/forms'
import {Redirect} from 'react-router-dom'

const SignUp = ()=>{
  
    const {user} = useSelector(state => state.user)
    return(
        <div>{user ? <Redirect to= "/"/> : <LoginForm/> }<div>{user}</div></div>
        
    )
}


export default SignUp