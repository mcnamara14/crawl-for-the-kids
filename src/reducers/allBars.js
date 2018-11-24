const allBars = (
  state = [
    {
      name: 'Three Lions',
      barNum: 1,
      barSubtitle: 'Drummers Drumming',
      special: '$5 Whiskey Shot & a Coors Light',
      time: '1:00PM - 1:30PM',
      googleName: 'three+lions',
      checkedIn: false,
      address: '2239 E Colfax'
    },
    {
      name: 'The Pub',
      barNum: 2,
      barSubtitle: 'Birds a Squacking',
      special: '$3 Jamo Shot',
      time: '1:30PM - 2:00PM',
      googleName: 'coors+field',
      checkedIn: false,
      address: '2239 E Colfax'
    }
  ],
  action
) => {
  switch (action.type) {
    case 'ADD_ALL_BARS':
      return [...action.bars]
    case 'CHECKIN_BAR':
      const updatedBars = state.map(bar => {
        let updatedBar
        bar.barNum === action.barNum ? (updatedBar = { ...bar, checkedIn: true }) : (updatedBar = bar)

        return updatedBar
      })

      return updatedBars
    default:
      return state
  }
}

export default allBars
