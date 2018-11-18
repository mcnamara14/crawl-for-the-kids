const currentBar = (state = {
  name: 'Three Kings',
  barNum: 1,
  barSubtitle: 'Drummers Drumming',
  special: '$5 Whiskey Shot & a Coors Light',
  time: '1:00PM - 1:30PM'
}, action) => {
  switch (action.type) {
    case 'STORE_CURRENT_BAR':
      return action.bar
      break;
    default:
      return state
  }
}

export default currentBar
