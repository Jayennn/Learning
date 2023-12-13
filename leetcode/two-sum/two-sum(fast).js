
/**
 *
 *  Example code of O(n)
 *  im not write this code
 *
 * */

var twoSum = function(nums, target) {
    const numsMap = new Map();


    for ( let i = 0; i<= nums.length; i++) {
        const x = target - nums[i];
        console.log(target - nums[i],(target, nums[i]))
        if (numsMap.has(x)) {
            return [numsMap.get(x), i]
        }
        numsMap.set(nums[i], i )
    }

    return []
};


console.log(twoSum([1, 2, 3, 5], 5))
