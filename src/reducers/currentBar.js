const currentBar = (
  state = {
    name: 'Three Lions',
    barNum: 1,
    barSubtitle: 'Drummers Drumming',
    special: '$5 Bud Light',
    time: '1:00PM - 1:30PM',
    googleName: 'three+lions',
    checkedIn: false,
    address: '2239 E Colfax',
    fact: 'June 13th is National Albinism Awareness Day'
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
