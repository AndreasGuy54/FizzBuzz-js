// get the fizz and buzz values from the inputs on the app page
const getValues = () => {
    let fizzInput = parseInt(document.querySelector('#fizzValue').value);
    let buzzInput = parseInt(document.querySelector('#buzzValue').value);

    let values = fizzBuzz(fizzInput, buzzInput);
    displayValues(values);
}

// generate the results and store in an array
const fizzBuzz = (fizzValue, buzzValue) => {
    let fbValues = [];

    for (let i = 1; i <= 100; i++) {
        if (i % fizzValue === 0 && i % buzzValue === 0) {
            fbValues.push('FizzBuzz')
        } else if (i % fizzValue === 0) {
            fbValues.push('Fizz')
        } else if (i % buzzValue === 0) {
            fbValues.push('Buzz')
        } else {
            fbValues.push(i)
        }
    }
    return fbValues;
}

// display the results and style the fizz, buzz and fizzbuzz values
const displayValues = (fbValues, fizzValue, buzzValue) => {
    let templateRows = '';

    fbValues.forEach(value => {
        let className = '';

        if (value === 'FizzBuzz') {
            className = 'fizzBuzz';
        } else if (value === 'Fizz') {
            className = 'fizz'
        } else if (value === 'Buzz') {
            className = 'buzz'
        } 
        templateRows += `<tr><td class="${className}">${value}</td></tr>`;
    });

    document.querySelector('#results').innerHTML = templateRows;

}

// // get the values from the inputs on the app page
// const getValues = () => {
//     let firstNum = parseInt(document.querySelector('#startValue').value)
//     let lastNum = parseInt(document.querySelector('#endValue').value)

//     let numbers = generateNumbers(firstNum, lastNum);

//     displayNumbers(numbers);
// }
// // generate numbers from the start value to the end value
// const generateNumbers = (startVal, endVal) => {
//     let nums = [];

//     for (let i = startVal; i <= endVal; i++) {
//         nums.push(i);
//     }
//     return nums;
// }

// // Display the numbers and make even numbers bold
// const displayNumbers = (nums) => {
//     let templateRows = '';

//     nums.forEach(num => {
//         let className = '';

//         if (num % 2 === 0) {
//             className = 'even';
//         } 
        
//         templateRows += `<tr><td class="${className}">${num}</td></tr>`;
//     });

//     document.querySelector('#results').innerHTML = templateRows;
// }