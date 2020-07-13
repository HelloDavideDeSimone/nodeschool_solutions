let arr = process.argv.slice(2)

let reduced = arr.map(x => x[0] )
console.log(
    `[${arr}] becomes "${reduced.join('')}"`
    );