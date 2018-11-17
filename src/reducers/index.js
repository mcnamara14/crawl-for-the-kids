import { combineReducers } from 'redux'
import currentLocation from './currentLocationReducer'
import allBars from './allBars'
import userId from './storeUserId'
import userName from './storeUserName'

const rootReducer = combineReducers({
    currentLocation,
    allBars,
    userId,
    userName
})

export default rootReducer