
// # Assignment 01

// Create a pure NodeJS server that can handle a GET call, pull the data from the db.json and send it to the provided front end. You don't have to render everything, 3-4 properties are quite enough.

// Bonus 01: Upgrade the server so it also handles a POST request. You need to create a user on the front end, handle the POST request on the back end, and save that new user in db.json. There is no need to create a user with all the properties that the users have in the database. It's enough to have the same ones that you render on the front end.

const API_URL = 'http://localhost:3000';

const getBtn = document.getElementById("btn_get");
const postBtn = document.getElementById("btn_post");
const btnSubmit = document.getElementById("btnSubmit");

const userInput = document.getElementById(`username`);
const emailInput = document.getElementById(`email`);
const websiteInput = document.getElementById(`website`);
const addLatInput = document.getElementById(`addressLat`);
const compNameInput = document.getElementById(`companyName`);
const userList = document.getElementById(`list`);


getBtn.addEventListener('click', () => {
    getUsers();
});

btnSubmit.addEventListener(`click`, (e) => {
    
    e.preventDefault();
    let user = getUserInput();
    addNewUser(user);

})

const getUsers = () => {
    
    fetch(`${API_URL}/users`)
        .then((response) => response.json())
        .then((result) => {
            renderUsers(result);
        })
}

const renderUsers = (users) => {
    let inner = '';
    users.forEach((user) => {
        inner +=
            `
        <ul>
            <li>Username: ${user.username}</li>
            <li>Website: ${user.website}</li>
            <li>Email: ${user.email}</li>
            <li>Company Name: ${user.company.name}</li>
            <li>Geo Lat: ${user.address.geo.lat}</li>
        </ul>
        <hr><br>
        `
    })
    userList.innerHTML = inner;
}

const getUserInput = () => {
    const username = userInput.value;
    const email = emailInput.value;
    const website = websiteInput.value;
    const company = { name: compNameInput.value };
    const address = { geo: { lat: addLatInput.value } };

    const newUser = {
        username,
        email,
        website,
        company,
        address
    }
    console.log(newUser);
    return newUser;
}

const addNewUser = (newUser) => {
    fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(newUser)
    })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log(error))
}

