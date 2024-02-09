// Code your solution here
function findMatching(array, string) {
    const filtered = array.filter(function (driver){
        if(driver.toLowerCase() === string.toLowerCase()){
            return driver
        }
    });
    return filtered
}


function fuzzyMatch(array, string) {
    const filtered = array.filter(function (driver){
        if(driver[0, 1] === string[0, 1]){
            return driver
        }
    })
    return filtered
}


function matchName(array, string) {
    const filtered = array.filter(function (driver){
        if(driver.name === string){
            return driver
        }
    })
    return filtered
}


