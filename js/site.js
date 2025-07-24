
// Get values from the user. Need to get the Fizz value and the Buzz value (Controller Function).
function getValues() {

    // Get user values from the page.
    let fizzValue = document.getElementById("fizzNum").value;
    let buzzValue = document.getElementById("buzzNum").value;

    // Parsing given values from strings into integers.
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // Making sure the given values are integers. If not, the user is notified of the error.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // Call fizzBuzz.
        let fbArray = fizzBuzz(fizzValue, buzzValue);    
        // Call displayData and write values to the screen.
        displayData(fbArray);
    }
    else {
        alert("You must enter integers!");
    }

}

// Alter all numbers that are multiples of either the Fizz/Buzz values or both (Logic Function).
function fizzBuzz(fizzValue, buzzValue) {

    // Initialize an array to be returned.
    let returnArray = [];
    
    // Loop across all numbers (1 to 100).
    for (let index = 1; index <= 100; index++) {
        
        /* We need to check the current value using three steps.
        Check to see if the value is divisible by both fizzValue and buzzValue.
        Check to see if divisible by only the fizzValue.
        Check to see if divisible by only the buzzValue. */
        if (index % fizzValue == 0 && index % buzzValue == 0) {
            returnArray.push("FizzBuzz");
        }
        else if (index % fizzValue == 0) {
            returnArray.push("Fizz");
        }
        else if (index % buzzValue == 0) {
            returnArray.push("Buzz");
        }
        else {
            returnArray.push(index);
        }
    }

    return returnArray;

}

/* Display the numbers and mark all Fizz values in GREEN, Buzz values in BLUE and 
FizzBuzz values in RED (Display Function). */
function displayData(fbArray) {

    // Selects the tbody element from the app page.
    let tableBody = document.getElementById("results");

    /* Selects the template element which contains the structure for 
    adding rows of data items to the table. */
    let templateRow = document.getElementById("fbTemplate");

    // Clears the table initially.
    tableBody.innerHTML = "";

    /* Loop over the array and create a table row that consists of 
    five table data items, then add the row to the table. */
    for (let index = 0; index < fbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);
        
        // Grab the td elements to put into the array.
        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].textContent = fbArray[index];
        rowCols[0].classList.add(fbArray[index]);

        rowCols[1].textContent = fbArray[index + 1];
        rowCols[1].classList.add(fbArray[index + 1]);

        rowCols[2].textContent = fbArray[index + 2];
        rowCols[2].classList.add(fbArray[index + 2]);

        rowCols[3].textContent = fbArray[index + 3];
        rowCols[3].classList.add(fbArray[index + 3]);

        rowCols[4].textContent = fbArray[index + 4];
        rowCols[4].classList.add(fbArray[index + 4]);

        // Add each row to the table.
        tableBody.appendChild(tableRow);
    }

}
