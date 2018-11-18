export const addAllBars = bars => {
    return {
      type: 'ADD_ALL_BARS',
      bars
    }
  }

export const storeCurrentBar = bar => {
  return {
    type: 'STORE_CURRENT_BAR',
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

export const updateCounter = () => {
  return {
    type: 'UPDATE_COUNTER',
  }
}

export const checkIn = barNum => {
  return {
    type: 'CHECKIN_BAR',
    barNum
  }
}
