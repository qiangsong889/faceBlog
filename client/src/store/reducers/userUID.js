export default (state=null, action)=> {
    switch(action.type) {
        case "USER_UID":
          return action.payload;
          break;
    }
    return state
}