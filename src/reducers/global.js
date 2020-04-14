import {DETECT_IS_MOBILE} from '../actions/global'

const defaultState = {
    isMobile:false
}

export default (state = defaultState, action)=>{
    switch (action.type) {
        case DETECT_IS_MOBILE:
            return{
                ...state,
                ...action.payload
            }
        default:
            return{
                ...state
            }
    }
}