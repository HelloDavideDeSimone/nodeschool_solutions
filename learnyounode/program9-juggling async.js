const http =require('http');
const bl = require('bl')
var after = require("after")
var next = after(3, printResults);
let array = [];
let count=0;


function printResults(){
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

function get(index){

http.get(process.argv[2+index], (response) => {
    response.pipe(bl( (err, data)=>{ 
        if (err) throw error;   
        array[index]=data.toString();
        next();
     }))

})




}


for (var i = 0; i < 3; i++)
  get(i);


