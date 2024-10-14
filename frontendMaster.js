// const str = "helloworld";

// const obj = {};
// for (const x of str) {
//     if(obj[x]){
//     obj[x]+=1;
//    }
//    else {
//     obj[x]=1
//    }
//  }

// for (let i = 0; i < str.length; i++) {
//    if (obj[str[i]]) {
//     obj[str[i]] += 1;
//   } else {
//     obj[str[i]] = 1;
//   }
// }
// console.log(obj);

function showMessage(marks) {
  //  const msg = marks || 'Absent'; //bug   solve
  const msg = marks ?? "Absent"; //bug   solve

  console.log(`Marks ${msg}`);
}

showMessage(12);
showMessage(0);
showMessage(435);
