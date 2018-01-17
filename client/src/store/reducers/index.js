import { combineReducers } from 'redux'
import active_user from './active_user_reducers'

const allReducers = combineReducers({
    active_user: active_user
})

module.exports = allReducers;


