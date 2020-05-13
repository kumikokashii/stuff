//https://leetcode.com/problems/valid-parentheses/submissions/

/**
 * @param {string} s
 * @return {boolean}
 */

//Runtime: faster than 63%. Memory: less than 90%.
// var isValid = function(s) {
//     let expectedCloses = [];
    
//     for (let i=0; i < s.length; i++) {        
//         const c = s.charAt(i);
            
//         if (c === '(') {
//             expectedCloses.push(')');
//             continue;
//         }
//         if (c === '[') {
//             expectedCloses.push(']');
//             continue;
//         }
//         if (c === '{') {
//             expectedCloses.push('}');
//             continue;
//         }
        
//         //char is closed paranthesis
//         if (c !== expectedCloses[expectedCloses.length-1]) {
//             return false;
//         }
        
//         expectedCloses.pop();
//     }
    
//     if (expectedCloses.length > 0) {
//         return false;
//     }
    
//     return true;
// };


//Runtime: faster than 94%. Memory: less than 41%.
var isValid = function(s) {
    const pars = {'(': ')', '[': ']', '{': '}'};
    let expectedCloses = [];
    
    for (let i=0; i < s.length; i++) {        
        const c = s.charAt(i);
                
        if (c in pars) {
            expectedCloses.push(pars[c]);
            continue;
        }
        
        //char is closed paranthesis
        if (c !== expectedCloses[expectedCloses.length-1]) {
            return false;
        }
        
        expectedCloses.pop();
    }
    
    if (expectedCloses.length > 0) {
        return false;
    }
    
    return true;
};