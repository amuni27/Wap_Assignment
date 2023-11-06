const getNewArray = function(stringArray) {
    const filteredArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        const currentString = stringArray[i];
        if (currentString.length >= 5 && currentString.includes('a')) {
            filteredArray.push(currentString);
        }
    }
    return filteredArray;
}
const h1Element = document.getElementById("output");
const inputArray = ["apple", "banana", "cherry", "date", "elderberry"];
const newArray = getNewArray(inputArray);
h1Element.innerHTML = newArray;
console.log(newArray);
