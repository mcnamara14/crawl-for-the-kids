import { combineReducers } from 'redux'
import currentBar from './currentBar'
import allBars from './allBars'
import userId from './storeUserId'
import userName from './storeUserName'
import counter from './counter'

const rootReducer = combineReducers({
    currentBar,
    allBars,
    userId,
    userName,
    counter
})

export default rootReducer