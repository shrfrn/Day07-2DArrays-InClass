var gMat1 = generateMat(4, 5)
console.table(gMat1)

var gMax = getMaxVal(gMat1)
console.log('max: ', gMax)

function generateMat(rows, cols){
    var mat = []
    for(var i = 0; i < rows; i++){
        mat[i] = []
        for(var j = 0; j < cols; j++){
            mat[i][j] = getRandomInt(1, 100)
        }
    }
    return mat
}

// Start like this
function getMaxVal(mat){
    for(var i = 0; i < mat.length; i++){
        var currLine = mat[i]
        console.log('currLine: ', currLine)
        
        for(var j = 0; j < mat[i].length; j++){
            var currNum = currLine[j]
            console.log('currNum: ', currNum)
        }
    }
}

// With temp vars
// function getMaxVal(mat){
//     var max = -Infinity
//     for(var i = 0; i < mat.length; i++){
//         var currLine = mat[i]
        
//         for(var j = 0; j < mat[i].length; j++){
//             var currNum = currLine[j]
//             if(max < currNum) max = currNum
//         }
//     }
//     return max
// }

// Without temp vars
// function getMaxVal(mat){
//     var max = -Infinity
//     for(var i = 0; i < mat.length; i++){
//         for(var j = 0; j < mat[i].length; j++){
//             if(max < mat[i][j]) max = mat[i][j]
//         }
//     }
//     return max
// }

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}
