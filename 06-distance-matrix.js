var gCities = ['A', 'B', 'C', 'D']

var gDistanceMat = [
    [0,  18, 10, 12],
    [18,  0, 17, 20],
    [10, 17, 0,  13],
    [12, 20, 13, 0 ],
]
var farthestCity = getFarthestCity(gDistanceMat, 'D')
console.log('farthestCity: ', farthestCity)

printFarthestCities()

var closestCity = findMostCentralCity(gDistanceMat)
console.log('closestCity: ', closestCity)

function getFarthestCity(distanceMat, city){
    // Get the index of city from the gCities array
    var cityIdx = gCities.indexOf(city)
    // console.log('cityIdx: ', cityIdx)

    // Get the array of distances from that city
    var currCityDistances = distanceMat[cityIdx]
    // console.log('currCityDistances: ', currCityDistances)

    // Find the max distance on the distances array
    var maxDistance = Math.max(...currCityDistances)
    // console.log('maxDistance: ', maxDistance)

    // Find its index in the distances array
    var maxDistanceIdx = currCityDistances.indexOf(maxDistance)
    // console.log('maxDistanceIdx: ', maxDistanceIdx)

    // Using the index, find the name of the city in the gCities array
    var farthestCity = gCities[maxDistanceIdx]
    // console.log('farthestCity: ', farthestCity)

    // Explain why we use an object and not an array
    return { city: farthestCity, distance: maxDistance }
}

// This version uses a loop to find maxDistance instead of the ... operator
// function getFarthestCity(distanceMat, city){
//     var maxDistance = 0

//     var cityIdx = gCities.indexOf(city)
//     // console.log('cityIdx: ', cityIdx)


//     var currCityDistances = distanceMat[cityIdx]
//     // console.log('currCityDistances: ', currCityDistances)

//     for(var i = 0; i < currCityDistances.length; i++){
//         var currDistance = currCityDistances[i]
//         if(currDistance > maxDistance) {
//             maxDistance = currDistance
//             // This...
//             farthestCity = gCities[i]
//         }
//     }
//     // console.log('maxDistance: ', maxDistance)

//     var maxDistanceIdx = currCityDistances.indexOf(maxDistance)
    
//     // ... or this
//     var farthestCity = gCities[maxDistanceIdx]

//     return { city: farthestCity, distance: maxDistance }
// }

function printFarthestCities(){
    for(var i = 0; i < gCities.length; i++){
        var currCity = gCities[i]
        // console.log('currCity: ', currCity)

        var farthestCity = getFarthestCity(gDistanceMat, currCity)
        console.log('furthestCity: ', farthestCity)
    }
}
// function printFurthestCities(){
//     for(var i = 0; i < gCities.length; i++){
//         var currDistancesArray = gDistanceMat[i]
        
//         var maxDistance = Math.max(...gDistanceMat[i])
//         var maxDistanceIdx = currDistancesArray.indexOf(maxDistance)
//         console.log('The Furthest city from', gCities[i]);
//         console.log('is', gCities[maxDistanceIdx]);
//         console.log('it\'s', maxDistance, 'miles away...');
//     }
// }
function findMostCentralCity(distanceMat){
    var maxDistances = []

    for(var i = 0; i < gCities.length; i++){
        var currCity = gCities[i]
        console.log('currCity: ', currCity)

        // For each city, find the city farthest from it
        var farthestCity = getFarthestCity(distanceMat, currCity)
        console.log('farthestCity: ', farthestCity)
        
        // ... and push it's distance to maxDistances
        maxDistances.push(farthestCity.distance)
        console.log('maxDistances: ', maxDistances)
    }

    // Find the minimal distance in maxDistances
    var minDistance = Math.min(...maxDistances)

    // Find the index of that minimal distance
    var minDistanceIdx = maxDistances.indexOf(minDistance)

    // Use that index to access the gCities array
    return gCities[minDistanceIdx]
}