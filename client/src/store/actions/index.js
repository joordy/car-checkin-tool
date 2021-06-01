export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}

export const checkIn = (id, userID) => {
    return {
        type: 'CHECK_IN',
        payload: id,
        userPayload: userID,
    }
}
