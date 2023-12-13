
/**
 *
 * Time Complexity O(n^2)
 *
 * */

function twoSum(nums, target) {
    let res = [];
    console.time("process")

    nums.forEach((num, index) => {
        for (let i = nums.length - 1; i > 0; i--) {
            if (num + nums[i] === target) {
                if(index !== i){
                    res.push(index, i)
                }
            }
        }
    })

    console.timeEnd("process")

    return res.splice(0,2);
}
console.log(
    twoSum([1, 2, 3, 5], 5)
)
