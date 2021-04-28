const express = require('express');
const fileSystem = require(`./file-system`);
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/users', (req, res, next) => {
    const users = fileSystem.getData(`db.json`)

    res.send(users);
})

app.post(`/users`, (req, res, next) => {
    users = fileSystem.getData("db.json")
    parsedUsers = JSON.parse(users)
    newUserId = parsedUsers[parsedUsers.length - 1].id + 1
    console.log(newUserId);

    const user = {
        id: newUserId,
        username: req.body.username,
        email: req.body.email,
        website: req.body.website,
        company: {
            name: req.body.company,
        },
        address: {
            geo: {
                lat: req.body.address
            }
        },
    }

    fileSystem.addData(user, "db.json")

    res.send(user);
})

app.delete(`/users/:id`, (req, res, next) => {
    const id = req.params.id;
    fileSystem.deleteData(parseInt(id), `db.json`)
    res.send(JSON.stringify({ deleted: true }))
})



app.listen(3001);