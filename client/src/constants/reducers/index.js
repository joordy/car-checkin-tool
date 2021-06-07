import { combineReducers } from 'redux'

const verifiedDriverReducer = (state = false, action) => {
    switch (action.type) {
        case 'verifiedDriverLicense':
            return !state
        case 'notVerifiedDriverLicense':
            return state
        default:
            return state
    }
}

const verifiedImageReducer = (state = false, action) => {
    switch (action.type) {
        case 'verifiedImg':
            return !state
        case 'notVerifiedImg':
            return state
        default:
            return state
    }
}

const paidReducer = (state = false, action) => {
    switch (action.type) {
        case 'paid':
            return !state
        case 'notPaid':
            return state
        default:
            return state
    }
}

const allReducers = combineReducers({
    verifiedImageReducer: verifiedImageReducer,
    verifiedDriverReducer: verifiedDriverReducer,
    paidReducer: paidReducer,
})

export default allReducers
