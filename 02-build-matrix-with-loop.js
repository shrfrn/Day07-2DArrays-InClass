// Stage 1
var gMat1 = []
for(var i = 0; i < 4; i++){
    gMat1[i] = []
}
console.log('mat: ', Mat1)

// Stage 2
var gMat1 = []
for(var i = 0; i < 4; i++){
    gMat1[i] = [1, 2, 3]
}
console.log('mat: ', gMat1)

// Stage 3
var gMat1 = []
for(var i = 0; i < 4; i++){
    gMat1[i] = []
    var currArr = gMat1[i]
    for (var j = 0; j < 3; j++) {
        currArr[j] = j + 1
        // gMat1[i][j] = '🍕'
    }
    console.log('mat[' + i + ']: ', gMat1[i])
}
console.log('mat: ', gMat1)