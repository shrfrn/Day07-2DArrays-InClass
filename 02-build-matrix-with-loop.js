// Stage 1
var gMat = []
for(var i = 0; i < 4; i++){
    gMat[i] = []
}
console.log('mat: ', gMat)

// Stage 2
var gMat = []
for(var i = 0; i < 4; i++){
    gMat[i] = [1, 2, 3]
}
console.log('mat: ', gMat)

// Stage 3
var gMat = []
for(var i = 0; i < 4; i++){
    gMat[i] = []
    var currArr = gMat[i]
    for (var j = 0; j < 3; j++) {
        currArr[j] = j + 1
        // gMat1[i][j] = '🍕'
    }
    console.log('mat[' + i + ']: ', gMat[i])
}
console.log('mat: ', gMat)