export default (state=null, action) => {
    switch(action.type){
        case "OPTION_SELECTOR":
          return action.payload;
          break;
    }
    return state
}