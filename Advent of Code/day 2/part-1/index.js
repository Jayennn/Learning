const fs = require("node:fs")

const data = fs.readFileSync("./input1.txt", 'utf-8').split("\r\n").filter(Boolean)

let ids = 0

data.forEach((game, index) => {
    let groups = game.split(": ")[1].split("; ")

    for(let i = 0; i < groups.length; i++){
        let temp = groups[i].split(", ")
        let cubes = {"red": 0, "green": 0, "blue": 0}

       for(let item of temp){
           let b = item.split(" ")
           cubes[b[1]] = Number(b[0])
       }

       if(cubes["red"] > 12 || cubes["green"] > 13 || cubes["blue"] > 14) return null

    }
       ids += index + 1
})

console.log(ids)
