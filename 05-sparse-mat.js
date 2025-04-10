'use strict'

var gMat1 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 5, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 4, 5, 0],
    [0, 0, 0, 5, 6],
]

console.log('isSparseMatrix(gMat1): ', isSparseMatrix(gMat1))
function isSparseMatrix(mat){

    // Find out if this is a matrix (rows === cols)
    var rows = mat.length
    var cols = mat[0].length

    if(rows !== cols) return false

    for(var i = 1; i < rows; i++){
        if (mat[i].length !== cols) return false
    }

    // Count non-zero elements
    var nonZeroCount = 0
    for(var i = 0; i < mat.length; i++){
        for(var j = 0; j < mat[i].length; j++){
            // First like this...
            if(mat[i][j] !== 0) nonZeroCount++

            // ...then like this
            // if(mat[i][j]) nonZeroCount++

            // Check if there aren't too many of them
            if(nonZeroCount > 0.2 * mat.length ** 2) return false
        }
    }

    // Check if there are more than 2 non zero values in a row
    var nonZeroCountInLine
    for(var i = 0; i < mat.length; i++){
        nonZeroCountInLine = 0
        for(var j = 0; j < mat[i].length; j++){
            if(mat[i][j]) nonZeroCountInLine++
            if(nonZeroCountInLine > 2) return false
        }
    }

    return true
}

// Now merge the two loops
function isSparseMatrix(mat) {
    var nonZeroCount = 0
    
    for (var i = 0; i < mat.length; i++) {
        // Check if all rows are the same length = mat.length
        if (mat[i].length !== mat.length) return false
        
        var nonZeroInLine = 0
        for (var j = 0; j < mat[i].length; j++) {
            if (mat[i][j]) {
                nonZeroCount++
                // Check if there aren't too many of them
                if (nonZeroCount > 0.2 * mat.length ** 2) return false

                nonZeroInLine++
                // Check if there are more than 2 non zero values in a row
                if (nonZeroInLine > 2) return false
            }
        }
    }
    return true
}

var gMat2 = buildSparseMatrix([1, 9, 8, 25],[4, 3, 2, 0], [4, 2, 2, 3], 25)
console.log('gMat2: ', gMat2)

function buildSparseMatrix(nums, rowIdxs, colIdxs, cellCount) {
    var mat = []
    var rows = cellCount ** 0.5
    var cols = cellCount ** 0.5
    // var numIdx = 0

    for (var i = 0; i < rows; i++) {
        mat[i] = []
        for (var j = 0; j < cols; j++) {
            mat[i][j] = 0
        }
    }
    for (var numIdx = 0; numIdx < nums.length; numIdx++) {
        var currRowIdx = rowIdxs[numIdx]
        var currColIdx = colIdxs[numIdx]
        var currNum = nums[numIdx]

        mat[currRowIdx][currColIdx] = currNum
    }
    return mat
}