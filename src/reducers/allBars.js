const allBars = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALL_BARS':
      return [...action.bars]
    case 'CHECKIN_BAR':
      const updatedBars = state.map((bar ) => {
        let updatedBar
        bar.barNum === action.barNum ? updatedBar = {...bar, checkedIn: true} : updatedBar = bar

        return updatedBar
      })

      return updatedBars
    default:
      return state
  }
}

export default allBars
