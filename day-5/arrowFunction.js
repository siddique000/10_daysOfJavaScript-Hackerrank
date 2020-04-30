/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    var newArr = nums.map(value => {
        if (value % 2 === 0) {
            return value * 2;
        } else {
            return value * 3;
        }
    });
    return newArr;
}