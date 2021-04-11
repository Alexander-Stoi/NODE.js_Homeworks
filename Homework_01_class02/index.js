// # Assignment 01

// Create an app that asks the user for username and password input.
// The app should look for the specific username in a .json file,
// if the user exists and the password is correct, the user should get a message
// in the console "User logged in!"
// If the password was wrong or the user does not exist, the user should get an appropriate message.

// Bonus: Add a register user option, allowing you to insert new users in the .json database.

const usersService = require(`./users-service`);
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question(`Would you like to login or register? Type login or register accordingly: `, answer => {
    switch (answer) {
        case `login`:
            login();
            break;
        case `register`:
            register();
            break;
        default:
            console.log(`No such method`);

            console.log(input());
            break;
    }
})

const register = () => {
    rl.question(`Input newRegister username:`, (username) => {
        let newUsername = username;
        let newPassword;
        rl.question(`Input newRegister password: `, (password) => {

            newPassword = password;
            let user = {
                username: newUsername,
                password: newPassword
            };
            usersService.addUser(user);
            rl.close();
        })

    })
}


const login = () => {
    rl.question(`Input username > `, username => {
        let inputUsername = username;
        console.log(`User from readline`, inputUsername);

        rl.question(`Input password > `, password => {
            let inputPassword = password;
            console.log(`Password from readline`, inputPassword)
            usersService.checkUser(inputUsername, inputPassword);
            rl.close();
        })

    })
}

