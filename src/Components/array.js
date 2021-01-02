const array = [1, 2, 3];
const arrayNext = array;
arrayNext.length = 0;
const result = array[0];
console.log(arrayNext.length);