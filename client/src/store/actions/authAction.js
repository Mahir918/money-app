import * as Types from './types'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import setHeader from '../../utils/setAuth'

export const register = (user,history) => dispatch =>{
    axios.post('/api/users/register',user)
    .then(res=>{
        dispatch({
            type:Types.USERS_ERROR,
            payload:{
                error:{}
            }
        })
        history.push('/login')
    })
    .catch(error => {
        dispatch({
            type:Types.USERS_ERROR,
            payload:{
                error: error.response.data
            }
        })
    })
}

export const login = (user,history) => dispatch =>{
    axios.post('/api/users/login',user)
    .then(res =>{
        let token = res.data.token;
        localStorage.setItem('token', token)
        let decode = jwtDecode(token)
        setHeader(token)
        dispatch({
            type:Types.SET_USER,
            payload: {
                user:decode
            }
        })
        history.push('/')

    })
    .catch(error => {
        dispatch({
            type:Types.USERS_ERROR,
            payload:{
                error: error.response.data
            }
        })
    })
}

export const logout = (history) => dispatch =>{
    localStorage.removeItem('token')
    history.push('/login')
    return{
        type: Types.SET_USER,
        payload: {
            user:{}
        }
    }
}