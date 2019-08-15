export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE'

const dummyUser= {
    name : '더미유저',
    nickname: '더미닉네임',
    userId:'id',
    userPassword: 'password'
}


export const initialState = {
    isLoggedIn : false,
    isLogging : false,
    user :null,
}

export default (state= initialState, action) =>{
    switch(action.type){
        case USER_LOGIN_REQUEST:{
            return{
                ...state,
                isLogging : true
            }
        }
        case USER_LOGIN_SUCCESS:{
            return{
                ...state,
                user : action.data,
                isLoggedIn: true,
                isLogging : false,
            }
        }
        case USER_LOGIN_FAILURE:{
            return{
                ...state,
                user : null,
                isLoggedIn: false,
                isLogging : false,
            }
        }
        case USER_LOGOUT_REQUEST:{
            return{
                ...state,
            }
        }
        case USER_LOGOUT_SUCCESS:{
            return{
                ...state,
                user : null,
                isLoggedIn: false,
            }
        }
        case USER_LOGOUT_FAILURE:{
            return{
                ...state,
            }
        }
        default: 
            return {
                ...state,
            }
        
    }
}