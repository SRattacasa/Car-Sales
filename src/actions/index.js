export const addFeature = feature => { 
    console.log("ACTION added", feature)
    return {type: "ADD_FEATURE", payload: feature}
}

export const removeFeature = feature => { 
    console.log("removed", feature)
    return {type: "REMOVE_FEATURE", payload: feature}
}