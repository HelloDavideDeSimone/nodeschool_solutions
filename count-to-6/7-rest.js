module.exports = function (...args){
    let sum=0;
    args.forEach(x=>{sum+=x});
    return (sum/args.length);
};