import {combineReducers} from 'redux'
import authReducer from './authReducer'
import transactionReducer from './transactionReucer'

const rootReducer = combineReducers({
    auth: authReducer,
    transactions : transactionReducer
})

export default rootReducer