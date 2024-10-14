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

// function showMessage(marks) {
//   //  const msg = marks || 'Absent'; //bug   solve
//   const msg = marks ?? "Absent"; //bug   solve

//   console.log(`Marks ${msg}`);
// }

// showMessage(12);
// showMessage(0);
// showMessage(435);



const str = "i love my country";

const vowels = ['a','e','i','o','u'];


function countVowels(str) {
    let count =0;
    str.toLowerCase().split("").forEach(ch => {
        vowels.includes(ch) && count++
    });
  return count;
}

console.log(countVowels(str))