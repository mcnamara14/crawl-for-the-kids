const storeUserName = (state = "", action) => {
  switch (action.type) {
    case 'STORE_USER_NAME':
      return action.userName;
    default:
      return state
  }
}

export default storeUserName