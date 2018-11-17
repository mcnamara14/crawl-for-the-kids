const currentLocation = (state = 'Three Kings', action) => {
  switch (action.type) {
    case 'ADD_CURRENT_BAR':
      return action.name
      break;
    default:
      return state
  }
}

export default currentLocation
