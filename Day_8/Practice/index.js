let arr = [1,2,4,9,16,25,"Raman","John","Navi"];

// map
let mapOut = arr.map((element,index)=>{
        return element;
})

console.log(mapOut);


// foreach 
let forEachOut = arr.forEach((element,index)=>{
    return element*2;
})

console.log(forEachOut);


// filter
let filterOut = arr.filter((element,index)=>{
    return typeof(element)=='string';
})

console.log(filterOut)


// reduce 
let reduceOut = arr.reduce((accumulator,current)=>{
    return accumulator+current;
})

console.log(reduceOut);




let Out = arr.map((element,index)=>{
    return element;
}).filter((element,index)=>{
    return element%2==0;
}).map((element,index)=>{
    return element**2;
})

console.log(Out);