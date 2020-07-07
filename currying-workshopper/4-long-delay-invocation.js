let total = 0
const sum = function (a){
    if( !(a||0) ) return total;
    total = total+a;
    return sum;
}
module.exports=sum