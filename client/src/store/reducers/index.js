import { combineReducers } from 'redux'
import active_user from './active_user_reducers'
import option from './option'
import userId from './userId'
import userLoad from './userLoad'
import toggleComment from './toggleComment'
import postsLoad from './postsLoad'
import friendsSearch from './friendsSearch'

const allReducers = combineReducers({
    active_user: active_user,
    option: option,
    userId: userId,
    userLoad: userLoad,
    toggleComment: toggleComment,
    postsLoad: postsLoad,
    friendsSearch: friendsSearch
})

module.exports = allReducers;


//module.exports return obj
//export default return function