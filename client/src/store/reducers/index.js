import { combineReducers } from 'redux'

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return true
        default:
            return false
    }
}

const checkInReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHECK_IN':
            window.localStorage.clear()
            window.localStorage.setItem('CurrentCarCheckin', JSON.stringify(action.payload))
            window.localStorage.setItem('CurrentUser', JSON.stringify(action.userPayload))
            return action.payload
        default:
            return ''
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    logged: loggedReducer,
    checkIn: checkInReducer,
})

export default rootReducer
