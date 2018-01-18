import { combineReducers } from 'redux'
import active_user from './active_user_reducers'
import option from './option'
import userUID from './userUID'
import userLoad from './userLoad'

const allReducers = combineReducers({
    active_user: active_user,
    option: option,
    userUID: userUID,
    userLoad: userLoad
})

module.exports = allReducers;


//module.exports return obj
//export default return function