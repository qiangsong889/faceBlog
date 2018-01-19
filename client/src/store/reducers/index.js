import { combineReducers } from 'redux'
import active_user from './active_user_reducers'
import option from './option'
import userId from './userId'
import userLoad from './userLoad'
import toggleComment from './toggleComment'
import postsLoad from './postsLoad'

const allReducers = combineReducers({
    active_user: active_user,
    option: option,
    userId: userId,
    userLoad: userLoad,
    toggleComment: toggleComment,
    postsLoad: postsLoad
})

module.exports = allReducers;


//module.exports return obj
//export default return function