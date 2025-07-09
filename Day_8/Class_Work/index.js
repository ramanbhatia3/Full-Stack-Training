let arr = [1,2,3,4,5,6,7,8,"Rahul",true,undefined];

// for(let i=0;i<arr.length;i++){
//     console.log(element*2);
//     console.log(element**2);
    
// }


// map
// let out = arr.map((element,index)=>{
//     console.log(element,index);
//         return element*2
// })

// console.log(out);



// foreach 

// let forEachOut = arr.forEach((element,index)=>{
//     console.log(element);
//     console.log(element**2);
    
//     return element
// })

// console.log(forEachOut);




// filter

// let filterOut = arr.filter((element,index)=>{
// //     return element%2==0;
//     // return typeof(element)=='string';
//     return index%2==1;
// })

// console.log(filterOut)



// reduce 

// let reduceOut = arr.reduce((accumulator,current)=>{
//     return accumulator+current;
// },100)

// console.log(reduceOut);


let reduceOut = arr.map((element,index)=>{
    return element;
}).filter((element,index)=>{
    return element%2==0;
}).map((element,index)=>{
    return element**2;
})

console.log(reduceOut);