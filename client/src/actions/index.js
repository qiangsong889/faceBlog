export const activeUser = (user) => {
    console.log('inside of activeUser', user)
    return {
        type: "ACTIVE_USER",
        payload: user
    }
}
export const selectOption= (option) => {
    return {
      type: 'OPTION_SELECTOR',
      payload: option
    }
}

export const selectUser = (id) => {
    console.log('action/selectUser here is the id ', id)
    return {
        type: "USER_ID",
        payload: id
    }
}

export const loadUser = (info) => {
    return {
        type: "USER_LOAD",
        payload: info
    }
}       

export const toggleCommentAction = (id) => {
    return {
        type: "COMMENT_TOGGLE",
        payload: id
    }
}

export const loadPosts = (posts) => {
    console.log('inside of loadPosts here is the posts', posts)
    return{
        type: "POSTS_LOAD",
        payload: posts
    }
}

export const searchFriends=(friends)=> {
    return {
        type: "FRIEND_SEARCH",
        payload: friends
    }
}

export const loadFriends = (friends) => {
    console.log('iiiiiiiinside of loadFriends here is the friends', friends)
    return {
        type: "FRIENDS_LOAD",
        payload: friends
    }
}