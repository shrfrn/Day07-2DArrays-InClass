var multTable = []

// Stage 1 - Start like this
for(i = 0; i < 10; i++){
    multTable[i] = []
}
console.log('multTable: ', multTable)

// Stage 2
for(i = 0; i < 10; i++){
    // Gradually add the elements
    multTable[i] = [(i + 1) * 1, (i + 1) * 2, (i + 1) * 3, (i + 1) * 4 ]
}

// Stage 3
for(i = 0; i < 10; i++){
    multTable[i] = []
    for(j = 0; j < 10; j++){
        multTable[i][j] = (i + 1) * (j + 1)
    }
}
console.log('multTable: ', multTable)
console.table(multTable)