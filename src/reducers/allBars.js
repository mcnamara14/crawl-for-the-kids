const allBars = (
  state = [
    {
      name: 'Three Lions',
      barNum: 1,
      barSubtitle: 'Drummers Drumming',
      special: '$2.5 Coors Banquet Cans - $3 Montucky 16oz Cans - $1 Off 16oz Drafts & Wells',
      challenge: 'Montucky 16oz can',
      time: '1:00PM - 1:30PM',
      googleName: 'three+lions',
      checkedIn: false,
      address: '2239 E Colfax',
      fact: 'June 13th is National Albinism Awareness Day'
    },
    {
      name: 'The Pub',
      barNum: 2,
      barSubtitle: 'Birds a Squacking',
      special: '$3 Jamo Shot',
      time: '1:30PM - 2:00PM',
      googleName: 'coors+field',
      checkedIn: false,
      address: '2239 E Colfax',
      fact: 'Albinism is an inherited genetic condition'
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
