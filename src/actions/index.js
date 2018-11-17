export const addAllBars = bars => {
    return {
      type: 'ADD_ALL_BARS',
      bars
    }
  }

export const addCurrentBar = bar => {
  return {
    type: 'ADD_CURRENT_BAR',
    bar
  }
}

export const storeUserName = userName => {
  return {
    type: 'STORE_USER_NAME',
    userName
  }
}

export const storeUserId = userId => {
  return {
    type: 'STORE_USER_ID',
    userId
  }
}
