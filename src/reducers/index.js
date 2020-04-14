import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import global from "./global";

export default combineReducers({
    global,
    form:reduxFormReducer
})
