const fs = require('fs')


fs.appendFileSync("./context.txt",`${Date.now()}hello i am Sohel khan\n`)

//Copy file 
fs.cpSync('./context.txt','./text.txt')


// fs.writeFileSync('./text.txt',"synchronous write file i am sohel khan")

// fs.writeFile('./text.txt',"asynchronous write file",(err)=>{err})

// const result = fs.readFileSync('./context.txt','utf-8')
// console.log(result);

// fs.readFile('./context.txt',"utf-8",(err,result)=>{
//     if(err)
//     {
//         console.log("err", err);
        
//     }
//     else{
//         console.log(result);
        
//     }
// })