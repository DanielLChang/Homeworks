// madLib
// function madLib(verb, adj, noun) {
//   return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`;
// }
//
// console.log(madLib('make', 'best', 'guac'));

//isSubstring
// function isSubstring(searchString, subString) {
//   return searchString.includes(subString);
// }
//
// console.log(isSubstring('time to program', 'time'));
// console.log(isSubstring('Jump for joy', 'joys'));

//fizzBuzz
// function fizzBuzz(array) {
//   var result = [];
//   array.forEach(num => {
//     if ((num % 3 === 0) ^ (num % 5 === 0)) {
//       result.push(num);
//     }
//   });
//   return result;
// }
//
// console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

//isPrime
// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// console.log(isPrime(1));
// console.log(isPrime(7));
// console.log(isPrime(8));
// console.log(isPrime(13));

//sumOfNPrimes
// function sumOfNPrimes(num) {
//   let sum = 0;
//   let count = 0;
//   let i = 2;
//
//
//   while (count < num) {
//     if (isPrime(i)) {
//       count++;
//       sum += i;
//     }
//     i++;
//   }
//
//   return sum;
// }
//
// console.log(sumOfNPrimes(0));
// console.log(sumOfNPrimes(1));
// console.log(sumOfNPrimes(4));

//allOrNothing
// function allOrNothing(mod, ...numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % mod !== 0) {
//       return false;
//     }
//   }
//   return true;
// }
//
// console.log(allOrNothing(3, 9, 12, 6));
// console.log(allOrNothing(5, 1, 2, 10));
