/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let s = 0;
    let c = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0 && nums[i]%3==0){
            s+=nums[i];
            c++;
        }
    }
    return c == 0 ? 0 : Math.floor(s/c);
};