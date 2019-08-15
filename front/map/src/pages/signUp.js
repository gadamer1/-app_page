import React from 'react'
import {useSelector} from 'react-redux'
import {LoginForm} from '../components/forms'
import {Redirect} from 'react-router-dom'

const SignUp = ()=>{
  
    const {user} = useSelector(state => state.user)
    console.log(user)
    return(
        <div className="content">
        <div className="title">회원가입</div>
        <div>{user ? <Redirect to= "/"/> : <LoginForm/> }</div>
        </div>
    )
}


export default SignUp