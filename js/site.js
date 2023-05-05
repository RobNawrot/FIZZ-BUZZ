
// Get the Fizz and Buzz values from the page (Controller Function).
function getValues() {

    // Get values from the page.
    let fizz = document.getElementById("fizzNum").value;
    let buzz = document.getElementById("buzzNum").value;

    // Attempt to cast the string values into integer values.
    fizz = parseInt(fizz);
    buzz = parseInt(buzz);

    // Input given for Fizz Buzz values must be validated. 
    if (Number.isInteger(fizz) && Number.isInteger(buzz) && 
    fizz >= 1 && fizz <= 100 && buzz >= 1 && buzz <= 100) {
        // Call fizzBuzz().
        let numbers = fizzBuzz(fizz, buzz);
        // Call displayNumbers().
        displayData(numbers);
    }
    else {
        alert("ERROR - You must enter integer values within the range of 1 - 100.");
    }

}

// Alter all numbers that are multiples of either the Fizz/Buzz values or both (Logic Function). 
function fizzBuzz(fizz, buzz) {

    const numbers = [];
    let index = 0;

    /* Populating an empty array with numbers 1-100. Finding all multiples
    of the Fizz/Buzz values in the array and changing their respective 
    values to "Fizz", "Buzz" or "FizzBuzz". */
    for (let num = 1; num <= 100; num++) {
        numbers.push(num);

        /* Detecting if a number is a multiple of any passed value. If it
        is, change the array's element value to "Fizz", "Buzz" or "FizzBuzz" 
        respectively. */
        if (numbers[index] % fizz == 0 && numbers[index] % buzz != 0) {
            numbers[index] = "Fizz";
            index++;     
        }
        else if (numbers[index] % buzz == 0 && numbers[index] % fizz != 0) {
            numbers[index] = "Buzz";
            index++;
        }
        else if (numbers[index] % fizz == 0 && numbers[index] % buzz == 0) {
            numbers[index] = "FizzBuzz";
            index++;
        }
        else {
            index++;
        }

    }

    return numbers;

}

/* Display the numbers and mark all Fizz values in GREEN, Buzz values in BLUE and 
FizzBuzz values in RED (Display Function).  */
function displayData(numbers) {

    let classname = "";
    let i = 0;
    let count = 0;

    /* General string "templateRows" used for generating an HTML table on the app page. 
    While the "header" and "footer" variables represent each row of the table and 
    encapsulate the table data elements. */
    let templateRows = "";
    let header = `<tr class="d-flex"> `;
    let footer = ` </tr>`;
    
    // Looping through the array of numbers.
    for (i = 0; i < numbers.length; i++) {
         
        /* Modifying and adding a cell into the table. Concatenates a string representing
        a table data element onto the general string. */
        if (numbers[i] == "Fizz") {
            let classname = "fizz";
            header += `<td class="${classname} flex-fill">${numbers[i]}</td>`;
        }
        else if (numbers[i] == "Buzz") {
            let classname = "buzz";
            header += `<td class="${classname} flex-fill">${numbers[i]}</td>`;
        }
        else if (numbers[i] == "FizzBuzz") {
            let classname = "fizzbuzz";
            header += `<td class="${classname} flex-fill">${numbers[i]}</td>`;
        }
        else {
            let classname = "regular";
            header += `<td class="${classname} flex-fill">${numbers[i]}</td>`;
        }

        count++;

        // Ensures that each row in the table displays five columns of data.
        if (count == 5) {
            header += footer;
            templateRows += header;
            header = `<tr class="d-flex"> `;
            count = 0;
        }

    }

    // Inserts the concatenated string into the 'tbody' HTML element.
    document.getElementById("results").innerHTML = templateRows;

}
