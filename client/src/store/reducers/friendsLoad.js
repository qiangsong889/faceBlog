export default (state=null, action) => {
    switch(action.type) {
        case "FRIENDS_LOAD":
        return action.payload
        break
    }
    return state
}