import {combineReducers} from 'redux'
import nowShowingReducer from './NowShowingReducer'
import comingSoonReducer from './ComingSoonReducer'
import cinemasReducer from './CinemasReducer'
export default combineReducers({
    nowShowing:nowShowingReducer,
    comingSoon:comingSoonReducer,
    cinemas:cinemasReducer
})