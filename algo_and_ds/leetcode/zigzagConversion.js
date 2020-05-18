//https://leetcode.com/problems/zigzag-conversion/submissions/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let dirDown = true;
    let currentRow = 0;
    
    let output = [];
    for (let i=0; i < numRows; i++) {
        output.push('');
    }
    
    for (let i=0; i < s.length; i++) {        
        output[currentRow] += s.charAt(i);
        if (dirDown) {
            currentRow++;
        } else {
            currentRow--;
        }
        if (dirDown && currentRow > numRows - 1) {
            dirDown = !dirDown;
            currentRow = Math.max(numRows - 2, 0);
        } else if (!dirDown && currentRow < 0) {
            dirDown = !dirDown;
            currentRow = Math.min(1, numRows-1);
        }
    }
    
    return output.join('');
};