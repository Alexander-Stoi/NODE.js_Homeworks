const fs = require(`fs`);

const getUsers = () => {
    let data = fs.readFileSync(`./users.json`);
    let parsedData = JSON.parse(data);
    return parsedData.users;
};


const checkUser = (username, password) => {
    let users = getUsers();
    let index = users.findIndex((s) => s.username === username);

    if (index < 0) {
        throw new Error(`There is no such user in DB`);
    } else {
        const pass = users[index];
        if (pass.password !== password) {
            throw new Error(`Wrong password, try again`);
        }
        return console.log(`User ${username} logged in!`);
    }
};

const saveUsers = (users) => {
    let data = { users };
    let stringifiedData = JSON.stringify(data);
    fs.writeFileSync(`./users.json`, stringifiedData);
}


const addUser = (user) => {
    let users = getUsers();
    let id = users.length + 1;
    const exist = users.find(s => s.username === user.username)
    if (exist) {
        throw new Error(`The user with name ${user.username} exist in the DB.`)
    }
    user.id = id;
    users = [...users, user]
    saveUsers(users);
}

module.exports = {
    checkUser,
    addUser
};
