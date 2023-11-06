const concat = (...args) => {
    let result = [];
    for (const arg of args) {
        if (Array.isArray(arg)) {
            result = [...result, ...arg];
        } else {
            result.push(arg);
        }
    }

    return result;
};
const h1Element = document.getElementById("output");
const concatenatedArray = concat('hi', [1, 2, 3], ['Hello', 'world']);
h1Element.innerHTML = concatenatedArray;
console.log(concatenatedArray);
