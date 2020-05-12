//https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */

//Runtime: faster than 9%. Memory: less than 6%

var longestPalindrome = function(s) {
    const sLen = s.length;
    
    let maxLength = 0;
    let startIndex;
    
    //init lookup tbl
    let tbl = [];
    for (let i=0; i<sLen; i++) {
        let row=[];
        for (let j=0; j<sLen; j++) {
            row.push(null);
        }
        tbl.push(row);
    }
    
    //fill tbl with true where substr len = 1
    for (let i=0; i<sLen; i++) {
        tbl[i][i] = true;
        maxLength = 1;
        startIndex = i;
    }
    
    //fill tbl where substr len = 2
    for (let i=0; i<sLen-1; i++) {
        if (s.charAt(i) === s.charAt(i+1)) {
            tbl[i][i+1] = true;
            maxLength = 2;
            startIndex = i;
        } else {
            tbl[i][i+1] = false;
        }
    }
    
    //fill rest. shortest first
    for (let len=3; len<=sLen; len++) {
        for (let i=0; i<sLen; i++) {
            const j = i+len-1;
            if (i > j) {
                continue;
            }
            if (tbl[i][j] !== null) {
                continue;
            }
            if (s.charAt(i) !== s.charAt(j)) {
                tbl[i][j] = false;
                continue;
            }
            if (tbl[i+1][j-1] !== true) {
                tbl[i][j] = false;
                continue;
            }
            tbl[i][j] = true;
            if (len > maxLength) {
                maxLength = len;
                startIndex = i;
            }   
        }
    }
        
    return s.substring(startIndex, startIndex+maxLength);
}


//Runtime: faster than 11%. Memory: less than 21%

// var isPal = function(s) {
//     const sLen = s.length;
//     for (let i=0; i < sLen / 2; i++) {
//         const left = s.charAt(i);
//         const right = s.charAt(sLen - i - 1);
//         if (left !== right) {
//             return false
//         }
//     }
//     return true;
// }

// var longestPalindrome = function(s) {
//     const sLen = s.length;
//     for (let i=sLen; i > 0; i--) {
//         for (let j=0; j+i<=sLen ; j++) {
//             const subStr = s.substring(j, j+i);
//             if (isPal(subStr)) {
//                 return subStr;
//             }
//         }
//     }
//     return '';
// };