export default (state=null, action) => {
    switch(action.type) {
        case "FRIEND_SEARCH":
        return action.payload;
        break;
    }
    return state
}