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
};