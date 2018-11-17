const allBars = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALL_BARS':
      return [...action.bars];
    default:
      return state
  }
}

export default allBars