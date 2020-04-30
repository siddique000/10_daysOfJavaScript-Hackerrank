/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var sortedArray = nums.sort((a, b) => a - b);

    var uniqueArray = sortedArray.filter(function (elem, index, arr) {
        return index === arr.indexOf(elem);
    })

    return uniqueArray[uniqueArray.length - 2];
}