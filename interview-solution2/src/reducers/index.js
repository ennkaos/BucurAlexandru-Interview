import counterReducer from "./Counter.js"

import {combineReducers} from "redux"
const allReducers=combineReducers({
    counter:counterReducer,
 
})
export default allReducers