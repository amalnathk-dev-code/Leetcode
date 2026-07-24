/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    let rev = Number(String(Math.abs(x)).split("").reverse().join("")) * sign;

    if (rev < -(2 ** 31) || rev > (2 ** 31) - 1) {
        return 0;
    }

    return rev;
}