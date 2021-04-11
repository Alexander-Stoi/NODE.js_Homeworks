// Assignment 02
// Create a textService module. The text service should have options to read, append and write to a certain file. Then import the module in an app.js The user should be asked to either read, write or append to a file, and what do they want to write or append.

// Hint: Check out the NodeJS documentation for the functions appendFile and appendFileSync. (There are a few examples)

// Bonus: Add a math module that has functions to sum, subtract, divide and multiply. Import the module in the app.js file. The user should also be given the options to sum, divide, multiply or subtract. (On top of read, write, append) If the user chooses any of the math options, then prompt them to add two numbers, and console log the appropriate result.


const fs = require(`fs`);


const appendToFile = (data) => {

    fs.appendFile('message.txt', data, (err) => {
        if (err) throw err;
        console.log(`The ${data} was appended to file!`);
    });
}

const writeToFile = (data) => {
    fs.writeFile(`message.txt`, data, err => {
        if (err) throw err;
        console.log(`The file was overwritten!`);
    })
}

const readTheFile = () => {
    fs.readFile(`message.txt`, (err, data) => {
        if (err) throw err;
        console.log(`The data in the file is: ${data} `)
    })
}


module.exports = {
    appendToFile,
    writeToFile,
    readTheFile
}

