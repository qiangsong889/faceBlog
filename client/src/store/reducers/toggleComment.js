export default (state=null, action) => {
    switch(action.type) {
        case "COMMENT_TOGGLE":
          return action.payload
          break;
    }
    return state;
}