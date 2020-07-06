const var_url = process.argv[2].toString();
const http =require('http');
const bl = require('bl')
//const bl = new BufferList()

http.get(var_url, (response) => {
    response.pipe(bl( (err, data)=>{ 
        if (err) throw error;   
        data=data.toString() ;
        console.log(data.length ) ;
        console.log(data) ;
     }))

})
