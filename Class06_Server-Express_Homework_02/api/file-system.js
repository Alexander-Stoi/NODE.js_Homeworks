const fs = require(`fs`);
const path = require(`path`);

const getData = (file) => {
    return fs.readFileSync(
        path.join(__dirname, 'db', file),
        err => {
            if (err) throw err
        })
}

const addData = (data, file) => {
    let users = JSON.parse(getData(file));

    users = [...users, data];

    return fs.writeFileSync(
        path.join(__dirname, `db`, file),
        JSON.stringify(users),
        err => {
            if (err) throw err
        })
}

const deleteData = (id, file) => {

    let users = JSON.parse(getData(file));
    console.log(id);
    users = users.filter(user => user.id !== id)
    console.log(users);
    return fs.writeFileSync(
        path.join(__dirname, 'db', file),
        JSON.stringify(users),
        err => {
            if (err) throw err
        }
    )
}

module.exports = {
    getData,
    addData,
    deleteData
}