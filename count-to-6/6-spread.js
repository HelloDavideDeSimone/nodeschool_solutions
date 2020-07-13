let array = process.argv.slice(2);

const min = Math.min(...array)

console.log(
`The minimum of [${array}] is ${min}`
);
