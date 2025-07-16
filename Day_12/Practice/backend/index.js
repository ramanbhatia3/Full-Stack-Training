const { log } = require("console");
const  fs = require("fs");

// Sync
// fs.writeFileSync('./test.txt','Hello World');

// const result = fs.readFileSync("./contacts.txt","UTF-8");
// console.log(result);

//Async
// fs.writeFile('./test.txt','Hello World', (err)=>{});

// fs.readFile("./contacts.txt","UTF-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     } else{
//         console.log(result);
//     }
// });


// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./test.txt", "Hey There\n");

// fs.copyFileSync("./test.txt","./copy.txt");

// fs.unlinkSync("./logs.txt");

// console.log(fs.statSync("./test.txt"));

// console.log(fs.statSync("./test.txt").isFile());

// fs.mkdirSync("my-docs");
// fs.mkdirSync("my-docs/a");