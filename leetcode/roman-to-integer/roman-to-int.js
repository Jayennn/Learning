function romanToInt(s){
    const romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let strings = s.split("")
    let nums = [];

    for(let i = 0; i < strings.length; i++){
        let n = strings[i]
        nums.push(romans[n])
    }

    let res = 0

    for (let x = 0; x < nums.length; x++) {
        // console.log(nums[x], nums[x + 1])


            console.log(nums[x], nums[x + 1], nums[x] >= nums[x + 1])
        if (x === nums.length - 1 || nums[x] >= nums[x + 1]) {
            res += nums[x];
        } else {
            res -= nums[x];
        }

    }
    return res
}

romanToInt("MCMXCIV")

// console.log(
//     romanToInt("MCMXCIV")
// )
