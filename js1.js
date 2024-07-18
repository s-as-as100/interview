
// var sum  = function(a) {
//     console.log("Live Viewers" +a);

    

// }

// var store = sum(100);
// console.log(store);

// var a= 5;

// function testCode() {
//     console.log("object")
// }


// console.log(testCode())



// Use Cases 
// 1. Write the code to get array of names from given array of users
// 2. Get back Only active users
// 3. Sort users by age descending 


// const users = [
//     {
//         id:1,
//         name:"Ajay",
//         isActive:true,
//         age :20
//     },
//     {
//         id:2,
//         name:"Akash",
//         isActive:true,
//         age:18
//     },
//     {
//         id:3,
//         name:"Fraz",
//         isActive:true,
//         age:36
//     },
//     {
//         id:4,
//         name:"Vipin",
//         isActive:false,
//         age:30
//     }

// ]  

// const names=[];
// // for(let i=0;i< users.length;i++) {
// //           names.push(users[i].name)
    
// // }
// for(let i=0; i<users.length;i++){
//     if(users[i].isActive){
//         names.push(users[i].name)
//     }
// }


// // using for each

// // users.forEach((user) =>{
// //     names.push(
// //         user.name
// //     )
// // })

// console.log(names,"arraynames ");




// function myFuntion() {

// }

// class myClass {

// }

// console.log(typeof myClass ,"hello");


 const myPromise = new Promise((res,rej) =>{
    document.getElementById('btn').addEventListener('click', () => {
        res("complete")
    
    });
    document.getElementById('btn2').addEventListener('click', () => {
        rej("reject due to some error")
    
    });

 })

myPromise.then(res => console.log(res))