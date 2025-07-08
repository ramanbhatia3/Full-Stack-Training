// // Data Structures
// // Array, Object

// // IIFE

// // let arr = [1,2,3,4,5,"Pankaj",true,false,null,undefined]

// // console.log(arr[arr.length-1])
// // console.log(arr.length)

// // Inserting Element
// // console.log(arr)

// // arr.push("John")

// // console.log(arr[arr.length-1])
// // console.log(arr)

// // arr.pop("John")

// // console.log(arr[arr.length-1])
// // console.log(arr)

// // arr[6] = "Manish";

// // console.log(arr)

// // Object

// let obj = {
//     name:"Varsha",
//     batch:"FS",
//     age:19,
//     subjects:{
//         1:["Chemistry","Physics","Maths"],
//         2:["ED","MP","PPS"],
//         Specialization:{
//             1:"DSA",
//             2:"FS",
//             3:["SE","FLAT"]
//         }
//     },
//     college:"RB",

//     // myFunction:()=>{
//     //     let a = 10;
//     //     let b = 20;

//     //     // console.log(a+b);

//     //     return a+b
//     // },

//     myFunction:function(){
//         console.log(this)
//     }

//     // myFunction:Function()
// }

// obj.college="RBIENT";

// console.log(this)
// obj.myFunction();
// // console.log(obj.myFunction());

// // let out = obj.myFunction()
// // console.log(out)

// // console.log(obj.myFunction())

// console.log(obj.subjects.Specialization[3][0])

// // console.log(obj.name)
// // console.log(obj.batch)
// // console.log(obj.age)
// // console.log(obj.subjects)
// // console.log(obj.college)

// // console.log(obj.subjects[3])

// // let obj1 = {
// //     name:"Thor",
// //     surname:"Odinson",
// //     age:1000,
// //     weapons:["Mjolnir","Strombreaker"],
// //     home:"Asgard"
// // }

// // console.log(obj1.name)
// // console.log(obj1.surname)
// // console.log(obj1.age)
// // console.log(obj1.weapons)
// // console.log(obj1.home)




// Conditions

// let a = 40;
// let b = 40;

// if(a<b){
//     console.log("a is less than b")
// }else if(a==b){
//     console.log("a is equal to b")
// }else{
//     console.log("a is not less than b");
// }


// Loops

// for , while , forOf , forin
    
// for loop

// for(initial-PointerEvent,condition,inc/dec){
//     logic
// }

// let str = "John"

// for(let i=0;i<str.length;i=i+1){
//     console.log(str[i]);    
// }


// while loop

// while(condition){


//     inc/dec
// }/

// let i = 1;

// while(i<10){
//     console.log(i);
//     i=i+1;
// }

// let str = "Kamal";

// let n = str.length;

// for(let i=n-1;i>=0;i--){
//     console.log(str[i]);
    
// }


// let arr = [1,2,3,4,5,6,7,8]

// for(let num of arr){
//     console.log(num);
    
// }


let obj={
    name:"Varsha",
    batch:"FS",
    age:18,
    sem:4,
    state:"Punjab",
    subjects :{
        1: ["Chemistry","Physics","Maths"],
        2:["ED","Math","DSA"],
        Specialization:{
            1:"PPS",
            2:"FS",
            3:["SE","Flat"]
        }
        
},
college:"RB",
// myfunction:function(){
//     // let a=20;
//     // let b=40;
//     // console.log(a+b)
//      console.log(this.name,this.state);
// }

}


// for(let key in obj){
//     if(typeof(obj[key])=="string"){
//         console.log(obj[key]);
        
//     }
// }




let arr = [1,2,3,4,5,6,7,8,9]

for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(`Element ${arr[i]} is even`);      
    }
    else{
        console.log(`Element ${arr[i]} is odd`);    
    }
}

// Map
// foreach 
// filter
// reduce