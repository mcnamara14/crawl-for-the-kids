const storeUserId = (state = null, action) => {
  switch (action.type) {
    case 'STORE_USER_ID':
      return action.userId;
    default:
      return state
  }
}

export default storeUserId