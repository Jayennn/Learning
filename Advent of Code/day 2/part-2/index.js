const fs = require("node:fs")

const data = fs.readFileSync("./input.txt", 'utf-8').split("\r\n").filter(Boolean)

let res = 0;
console.time("Running data")
data.forEach((game, idx) => {
    let groups = game.split(": ")[1].split("; ").map((v, i) => {
        let values = v.split(", ")
        let cubes = {"red": 0, "green": 0, "blue": 0}
        for(let value of values) {
            let a = value.split(" ")
            cubes[a[1]] = Number(a[0])
        }

        return cubes
    })

    const red = Math.max(...groups.map(x => x.red))
    const blue = Math.max(...groups.map(x => x.blue))
    const green = Math.max(...groups.map(x => x.green))

    res += red * blue * green

})
console.timeEnd("Running data")
console.log(res)
