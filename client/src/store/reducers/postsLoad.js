// export default (state=null, action)=> {
//     switch(action.type){
//         case "POSTS_LOAD":
//           return action.payload
//           break;
//     }
//     return state;
// }

export default (state=null, action) => {
    switch(action.type) {
        case "POSTS_LOAD":
          return action.payload
          break;
    }
    return state;
}