//https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //Initialize check objects
    //horizontal(9), vertical(9), square(9)
    //square will have 2 indexes. starting row and starting col.

    let horizontal = {};
    let vertical = {};
    let square = {};
    
    for (let i=0; i<9; i++) {
        horizontal[i] = {};
        vertical[i] = {};
        for (let j=0; j<9; j++) {
            horizontal[i][j] = false;
            vertical[i][j] = false;
        }
    }
    
    for (let i=0; i<9; i++) {
        if (i%3 !== 0) {
            continue;
        }
        square[i] = {}
        for (let j=0; j<9; j++) {
            if (j%3 !== 0) {
                continue;
            }
            square[i][j] = {}
            for (let k=0; k<9; k++) {
                square[i][j][k] = false;
            }
        }
    }
    
    //loop through the board and check for any duplicates
    for (let i=0; i<board.length; i++) {
        const row = board[i];
        for (let j=0; j<row.length; j++) {
            const value = row[j];
            if (value === '.') {
                continue;
            }
            
            //check in horizontal
            if (horizontal[i][value]) {
                return false;
            }
            horizontal[i][value] = true;
            
            //check in vertical
            if (vertical[j][value]) {
                return false;
            }
            vertical[j][value] = true;
            
            //check in square
            const rowStart = Math.floor(i/3) * 3;
            const colStart = Math.floor(j/3) * 3;
            if (square[rowStart][colStart][value]) {
                return false;
            }
            square[rowStart][colStart][value] = true;
        }
    }
        
    return true;
    
};
