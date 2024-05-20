
let get = prompt();
let num1 = Number(get);
let num2 = num1 + Number(3);

console.log(typeof get)
console.log(typeof num1)

if (typeof get === 'Number') {
  console.log('Упс, кажется, вы ошиблись')
} 

if (num2% 2== 0) {
  console.log('четное')
} else {
  console.log('не четное')
}
