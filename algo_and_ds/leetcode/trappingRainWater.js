//https://leetcode.com/problems/trapping-rain-water/submissions/

var getAmountOfArrayTillMax = function(height, useFirstForMax) {
    let maxIndex;
    if (useFirstForMax) {
        maxIndex = height.indexOf(Math.max(...height));
    } else {
        maxIndex = height.lastIndexOf(Math.max(...height));
    }
    
    let trapped = 0;
    let start = {i: 0, h: height[0]};
    
    for (let i=0; i < height.length; i++) {
        if (i === maxIndex) {
            break;
        }
        const iHeight = height[i];
        if (iHeight <= start.h) {
            trapped += (start.h - iHeight);
        } else {
            start = {i: i, h: iHeight};
        }
    }
    return trapped;
}
 
 
var trap = function(height) {
    let trapped = 0;
    trapped += getAmountOfArrayTillMax(height, true);
    
    height.reverse();
    trapped += getAmountOfArrayTillMax(height, false);
    
    return trapped;
};