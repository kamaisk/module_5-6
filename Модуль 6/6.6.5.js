const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

let arrValues = [];

for (let key in obj) {
    const values = obj[key];

    if (Array.isArray(values)) {
        for (let value of values) {
            arrValues.push(value);
        }
    } else {
        arrValues.push(values);
    }
}

console.log(arrValues);