import * as Types from './types'
import axios from 'axios'

export const loadTransactions = () => dispatch =>{
    axios.get('/api/transactions/')
    .then(response => {
        dispatch({
            type: Types.LOAD_TRANSACTIONS,
            payload: {
                transactions : response.data.transactions
            }
        })
    })
    .catch(error => {
        console.log(error)
    })
}

export const addNewTransaction = transaction => dispatch =>{
    axios.post('/api/transactions/',transaction)
    .then(response => {
        dispatch({
            type: Types.CREATE_TRANSACTION,
            payload:{
                transaction: response.data
            }
        })
    })
    .catch(error => {
        console.log(error)
    })
}

export const removeTransaction = id => dispatch =>{
    axios.delete(`/api/transactions/${id}`)
    .then(response => {
        dispatch({
            type:Types.REMOVE_TRANSACTION,
            payload:{
                id:response.data._id
            }
        })
    })
    .catch(error => {
        console.log(error)
    })
} 

export const updateTransaction = (id,transaction) => dispatch =>{
    axios.put(`/api/transactions/${id}`, transaction)
    .then(response => {
        dispatch({
            type: Types.UPDATE_TRANSACTION,
            payload:{
                transaction: response.data.transaction
            }
        })
    })
    .catch(error => {
        console.log(error)
    })
}