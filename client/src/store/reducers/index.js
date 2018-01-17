import { combineReducers } from 'redux'
import active_user from './active_user_reducers'
import option from './optionReducers'

const allReducers = combineReducers({
    active_user: active_user,
    option: option
})

module.exports = allReducers;


//module.exports return obj
//export default return function