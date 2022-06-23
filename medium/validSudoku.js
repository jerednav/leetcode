//Brute Force

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    //check if numbers are valid through each row
    for (let i=0; i< board.length; i++){
        const set = new Set()
        for (let j=0; j< board[i].length; j++){
            const cell = board[i][j]
            if (cell === '.') continue
            if (set.has(cell)) return false
            set.add(cell)
        }
    }
    //checking if its valid going through each column
        for (let i=0; i< board.length; i++){
        const set = new Set()
        for (let j=0; j< board[i].length; j++){
            const cell = board[j][i]
            if (cell === '.') continue
            if (set.has(cell)) return false
            set.add(cell)
        }
    }
    //checking each box, which is 3x3, for the bigger boxes.
    for (let i=0;i<3; i++){
        for (let j=0; j<3; j++){
            
            const set = new Set()
            for(let k=0;k<3;k++){
                for(let l=0; l<3;l++){
                    const cell = board[3 * i + k][3 * j + l]
                    if (cell === '.') continue
                    if (set.has(cell)) return false
                    set.add(cell)
                }
            }
        }
    }
    return true
};



