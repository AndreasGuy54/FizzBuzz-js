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

// Another way to solve the problem
const fizzBuzzB = (fizzValue, buzzValue) => {
    let fbValues = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i < 100; i++) {
        Fizz = i % fizzValue === 0;
        Buzz = i % buzzValue === 0;

        switch (true) {
            case Fizz && Buzz:
                fbValues.push('FizzBuzz');
                break;
            case Fizz:
                fbValues.push('Fizz');
                break;
            case Buzz:
                fbValues.push('Buzz');
                break;
            default:
                fbValues.push(i);
                break;
        }
    }
    return fbValues;
}

// display the results and style the fizz, buzz and fizzbuzz values
const displayValues = (fbValues) => {
    let tableBody = document.querySelector('#results');
    let templateRow = document.querySelector('#fbTemplate');

    tableBody.innerHTML = "";

    for (let i = 0; i < fbValues.length; i+=5) {

        //selecting only the tds in the tr
        let tableRow = document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll('td');

        // calculate which corresponding css class to add to the table data
        rowCols[0].classList.add(fbValues[i])
        rowCols[0].textContent = fbValues[i];

        rowCols[1].classList.add(fbValues[i + 1])
        rowCols[1].textContent = fbValues[i + 1];

        rowCols[2].classList.add(fbValues[i + 2])
        rowCols[2].textContent = fbValues[i + 2];

        rowCols[3].classList.add(fbValues[i + 3])
        rowCols[3].textContent = fbValues[i + 3];

        rowCols[4].classList.add(fbValues[i + 4])
        rowCols[4].textContent = fbValues[i + 4];

        tableBody.appendChild(tableRow);
    }
}