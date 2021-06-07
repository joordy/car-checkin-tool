const fetchData = async (url) => {
    let returnedData
    const data = await fetch(url)
    const response = await data.json()
    if (response === 'undefined') {
        console.log(response)
    } else {
        returnedData = response
    }
    return returnedData
}

export default fetchData
