const fs = require("node:fs")

const data = fs.readFileSync("./test.txt", 'utf-8').split("\r\n").filter(Boolean)

data.forEach()
