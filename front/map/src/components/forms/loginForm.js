import React,{useState,useCallback} from 'react'
import {useDispatch} from 'react-redux'
import { USER_LOGIN_REQUEST } from '../../reducers/user';

const LoginForm = ()=>{
    const [id,setId] =useState('')
    const [password,setPassword] =useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const [nickname,setNickname] = useState('')
    const dispatch = useDispatch()

    const onSubmit =useCallback((e)=>{
        e.preventDefault()
        if(password!==passwordCheck){
            return setPasswordError(true)
        }
        return dispatch({
            type: USER_LOGIN_REQUEST,
            data: {
                userId: id,
                password,
                nickname
            }
        })
    },[password,passwordCheck,nickname,id,dispatch])

    const onChangeId =useCallback((e)=>{
        setId(e.target.value)
    },[id])
    const onChangeNickname =useCallback((e)=>{
        setNickname(e.target.value)
    },[nickname])
    const onChangePassword =useCallback((e)=>{
        setPassword(e.target.value)
    },[password])
    const onChangePasswordCheck =useCallback((e)=>{
        setPasswordError(e.target.value !==password)
        setPasswordCheck(e.target.value)
    },[passwordCheck,password])
    return(
        <div className="login-form">
            <form onSubmit={onSubmit}>
                <label htmlFor="아이디">아이디</label>
                <input type="text" value={id} onChange={onChangeId} placeholder='id' required/>
                <label htmlFor="아이디">닉네임</label>
                <input type="text" value={nickname} onChange={onChangeNickname} placeholder='nickname' required/>
                <label htmlFor="아이디">패스워드</label>
                <input type="password" value = {password} onChange={onChangePassword} placeholder='password' required/>
                <label htmlFor="아이디">패스워드 확인</label>
                <input type="password" value ={passwordCheck} onChange={onChangePasswordCheck} placeholder='passwordCheck' required />
                {passwordError && <div id="passwordError" style={{color: 'red'}}>패스워드가 일치하지 않습니다</div>}
                <button htmlType ="submit" >등록</button>
            </form>
        </div>
    )
}

export default LoginForm