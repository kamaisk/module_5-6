let str = '';
let cleanStr = str.toString().toLowerCase().replace(/\s+/g, '');
let reverseStr = cleanStr.split('').reverse().join('');

if (cleanStr === reverseStr) {
    console.log(`Слово ${str} является палиндромом`);
} else {
    console.log(`Слово ${str} не является палиндромом`);
}