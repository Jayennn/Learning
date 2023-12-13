const fs = require('node:fs');

const data = fs.readFileSync('./input2.txt', 'utf8')
    .split('\r\n').filter(Boolean)


const numbers = '123456789'

const digits = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

function answer(str) {
    let res = 0;
    str.forEach(word => {
        let arr = [];

        for(let i = 0; i < word.length; i++){
            if(numbers.includes(word[i])){
                arr.push(word[i])
            }

            for(let j = 3; j <= 5; j++){
                let digit = digits[word.substring(i, i + j)]
                if(digit !== undefined){
                    arr.push(digit)
                }
            }

        }

        res += Number(arr[0] + '' + arr[arr.length - 1])
    })
}

answer(data)
