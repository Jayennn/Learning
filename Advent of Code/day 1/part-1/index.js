const fs = require('node:fs');

const data = fs.readFileSync('./input.txt', 'utf8')
    .toString()
    .replaceAll("\r", "")
    .split("\n")
    .filter(v => !!v)


let res = [];

for(let i = 0; i < data.length; i++){
    let temp = data[i]
    temp = temp.match(/[1-9]/g)
    if(temp){
      let first = temp[0]
      let last = temp[temp.length - 1];
      res.push(Number(first += last))
    }
}
console.log(res.reduce((acc, currVal) => acc + currVal, 0))
