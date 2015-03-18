var input = process.argv.slice(2)
var result = input.map(c => c[0]).reduce((p,c) => p + c, "")
console.log(`[${input}] becomes "${result}"`)
