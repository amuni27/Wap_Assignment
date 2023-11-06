function sum(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            totalSum += arr[i];
        }
    }
    return totalSum;
}
const h1Element = document.getElementById("output");
const numbers = [10, 25, 30, 15, 40];
const result = sum(numbers);
h1Element.innerHTML = "Sum of elements greater than 20:"+ result;
console.log("Sum of elements greater than 20:", result);
