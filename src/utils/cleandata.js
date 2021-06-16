export const filterCars = async () => {
    console.log('hi')
}

export const checkIndex = (index) => {
    if (index === 0) {
        return 'carResOne'
    } else if (index === 2) {
        return 'carResTwo'
    } else if (index === 3) {
        return 'carResThree'
    }
}
