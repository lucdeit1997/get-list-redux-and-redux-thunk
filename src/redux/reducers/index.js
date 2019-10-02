import crudReducer from './crudReducer'
import { combineReducers } from 'redux'

export default combineReducers({ 
    crud: crudReducer 
})