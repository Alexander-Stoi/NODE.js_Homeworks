// Assignment 02
// Create a textService module. The text service should have options to read, append and write to a certain file. Then import the module in an app.js The user should be asked to either read, write or append to a file, and what do they want to write or append.

// Hint: Check out the NodeJS documentation for the functions appendFile and appendFileSync. (There are a few examples)

// Bonus: Add a math module that has functions to sum, subtract, divide and multiply. Import the module in the app.js file. The user should also be given the options to sum, divide, multiply or subtract. (On top of read, write, append) If the user chooses any of the math options, then prompt them to add two numbers, and console log the appropriate result.

const textService = require(`./text-service`);

const mathService = require(`./math`);

const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`What are you trying to do (write, append, read, sum, divide, multiply, subtract) ? `, answer => {
    switch (answer) {
        case "write":
            writeToFile();
            break;
        case "append":
            appendToFile();
            break;
        case "read":
            readTheFile();
            break;

        case "sum":
            mathOperations(mathService.sum);
            break;
        case "subtract":
            mathOperations(mathService.subtract);
            break;
        case "divide":
            mathOperations(mathService.divide);
            break;
        case "multiply":
            mathOperations(mathService.multiply);
            break;
        default:
            rl.close();
            console.log(`No such method`);
            break;
    }
})

const appendToFile = () => {

    rl.question(`Insert text to append: `, text => {
        rl.close();
        textService.appendToFile(text);
    })
}

const writeToFile = () => {
    rl.question(`Insert text that you want to write to the file: `, text => {
        rl.close();
        textService.writeToFile(text);
    })
}

const readTheFile = () => {
    rl.close();
    textService.readTheFile();
}

const mathOperations = (mathOperation) => {

    rl.question("What is the first number? ", num1 => {
        if (!num1.trim() || !Number(num1.trim())) {
            console.log(`Problem with getting the first number.`);
            rl.close();
        } else {
            rl.question("What is the second number? ", num2 => {
                if (!num2.trim() || !Number(num2.trim())) {
                    console.log(`Problem with getting the second number.`);
                    rl.close();
                } else {
                    result = mathOperation(Number(num1), Number(num2))
                    console.log("result", result);
                    rl.close();
                }
            });
        }
    });

}

