/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }else{
        return x == String(Math.abs(x)).split("").reverse().join("");
    }



};