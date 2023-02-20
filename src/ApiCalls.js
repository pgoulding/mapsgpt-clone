import './mockJSON.json' 
const getLocationByLatLong = async (latlong) => {
    const url = ''
    const optionbs = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(content || undefined)
    }
    try {
        const response = await fetch(url, options)
        if(!response.ok){
            throw new Error('error fetching from url')
        }
        const results = await response.json()
        return results
    } catch (error) {
        throw Error(error.message)
    }
}


const getMapLists = (listView) => {
    
    if(listView === 'mostViewed') {

    } else if (listView === 'funnyPrompts') {

    } else if (listView === 'oddlySpecific') {

    } else {
        console.log('no matching map lists')
    }

    // // Setup a fetch for later
    // const url = ''
    // const optionbs = {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(content || undefined)
    // }
    // try {
    //     const response = await fetch(url, options)
    //     if(!response.ok){
    //         throw new Error('error fetching from url')
    //     }
    //     const results = await response.json()
    //     return results
    // } catch (error) {
    //     throw Error(error.message)
    // }
}