// # Assignment 02

// const { response } = require("express");

// Create the same server handling a GET request using Express. Same "rules" apply as the first assignment.

// Bonus 01: Upgrade the server to also handle a POST request, same as the first assignment, but this time using Express. (You don't have to build the front end twice :D )

// Bonus 02: Upgrade the Express server to also handle DELETE requests. The request should be sent from the Front End. (Check out the code from class for hints)


const API_URL = 'http://localhost:3001';

const getBtn = document.getElementById("btn_get");
const userList = document.getElementById(`list`);


const userInput = document.getElementById(`username`);
const emailInput = document.getElementById(`email`);
const websiteInput = document.getElementById(`website`);
const addLatInput = document.getElementById(`addressLat`);
const compNameInput = document.getElementById(`companyName`);
const btnSubmit = document.getElementById("btnSubmit");

const getUsers = () => {

    fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then(result => {
            
            renderUsers(result);
        })
        .catch(err => console.log(err))

}

const renderUsers = (users) => {
    let inner = '';
    users.forEach(user => {
        inner +=
            `
        <ul>
            <li>Username: ${user.username}</li>
            <li>Website: ${user.website}</li>
            <li>Email: ${user.email}</li>
            <li>Company Name: ${user.company.name}</li>
            <li>Geo Lat: ${user.address.geo.lat}</li>
            <button class="btn-delete" id="del-${user.id}">Delete</button>
        </ul>
        <hr><br>
        `
    })
    userList.innerHTML = inner;
}

getBtn.addEventListener(`click`, () => {
    
    getUsers();

})


const getUserInput = () => {
    const username = userInput.value;
    const email = emailInput.value;
    const website = websiteInput.value;
    const company = compNameInput.value;
    const address = addLatInput.value;

    const newUser = {
        username: username,
        email: email,
        website: website,
        company: company,
        address: address,
    }
    console.log("here", newUser)
    return newUser;
}

btnSubmit.addEventListener(`click`, () => {

    let user = getUserInput();

    fetch(`${API_URL}/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }

    })
        .then(res => res.json())
        .then(user => {
            console.log(user)
        })

})

const deleteUser = (userId) => {
    fetch(`${API_URL}/users/${userId}`, {
        method: `DELETE`
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log(error))
        .finally(() => {
            getUsers()
        })
}

document.getElementById(`list`).addEventListener(`click`, (e) => {
    
    const id = e.target.id;
    const userId = id.substr(4, id.length);
    deleteUser(userId);

})


