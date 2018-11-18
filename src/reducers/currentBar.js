const currentBar = (
  state = {
    name: 'Three Kings',
    barNum: 1,
    barSubtitle: 'Drummers Drumming',
    special: '$5 Whiskey Shot & a Coors Light',
    time: '1:00PM - 1:30PM',
    googleName: 'three+kings',
    checkedIn: false
  },
  action
) => {
  switch (action.type) {
    case 'STORE_CURRENT_BAR':
      return action.bar
    case 'CHECKIN_BAR':
      const updatedBar = {...state, checkedIn: true}

      return updatedBar
    default:
      return state
  }
}

export default currentBar
