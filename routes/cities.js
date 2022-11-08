// import React from 'react';

const cities = [
    {name: "Davao", country: "Philippines"},
    {name: "Cebu", country: "Philippines"},
    {name: "Manila", country: "Philippines"},
    {name: "Quezon", country: "Philippines"},
    {name: "New York", country: "USA"}
]
const users = [
    "dave", "addie", "rech", "rowen", "michael"
]
// const div = document.createElement("div");

const citiesSingular = cities.map((e) => {
        return  e.name + " City, " + e.country + ". ";
        // return  div.innerHTML =+ e.name + " City, " + e.country + ". ";
        // <div>
        //     City: {e.name}
        //     Country: {e.country}
        // </div>
}).join(" ");

var uwu = require("express");
var router = uwu.Router();

// router.get("/", (request, response, next) => {
//     response.send(users);
// });
//therefore: kung kinsay mauna, maoy ma render permanently.

router.get("/", (request, response, next) => {
    // response.send(citiesSingular);
    response.send(cities);
});


module.exports = router;
