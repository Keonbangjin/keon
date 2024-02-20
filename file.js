///4///

// let arr = [2, 4, 6, 7, true, false, null, undefined];
// let undefined = 0;
// let true = 1;
// let sum = arr.filter(item => typeof item === 'number').reduce((total, num) => total + num, 0);

// console.log(sum);




//5///
// let obj1 = { age: 19 };
// let obj2 = { age: 20 };

// function compareAges(obj1, obj2) {
//     if (obj1.age < obj2.age) {
//         return "obj2 katta";
//     } else if (obj1.age > obj2.age) {
//         return "obj1 katta";
//     } else {
//         return "ikkisiyam teng";
//     }
// }

// console.log(compareAges(obj1, obj2));




//6///

let myArr = [];

for (let i = 0; i < 6; i++) {
    let input = prompt( "Ixtiyoriy so'z kiriting");
    myArr.push(input);
}

console.log(myArr);
