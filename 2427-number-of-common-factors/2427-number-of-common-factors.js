/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    let c = 0;
    for(let i=1;i<(a>b ? a : b); i++){
        if(a%i==0 && b%i==0){
            c++;
        }
    }
    return a == b ? c+1 : c
    // let i = 1
    // while (i < (a > b ? a : b)) {
    //     if (a % i == 0 && b % i == 0) {
    //         c++;
    //     }
    //     i++;
    // }
    // return a==b ? c+1 : c;
};