const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
let newArr = [];

const newSet = new Set(arr);
newArr = Array.from(newSet);

console.log(newArr);