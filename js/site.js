// get the values from the inputs on the app page
const getValues = () => {
    let firstNum = parseInt(document.querySelector('#startValue').value)
    let lastNum = parseInt(document.querySelector('#endValue').value)

    let numbers = generateNumbers(firstNum, lastNum);

    displayNumbers(numbers);
}
// generate numbers from the start value to the end value
const generateNumbers = (startVal, endVal) => {
    let nums = [];

    for (let i = startVal; i <= endVal; i++) {
        nums.push(i);
    }
    return nums;
}

// Display the numbers and make even numbers bold
const displayNumbers = (nums) => {
    let templateRows = '';

    nums.forEach(num => {
        let className = '';

        if (num % 2 === 0) {
            className = 'even';
        } 
        
        templateRows += `<tr><td class="${className}">${num}</td></tr>`;
    });

    document.querySelector('#results').innerHTML = templateRows;
}