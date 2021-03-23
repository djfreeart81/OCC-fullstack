const express = require('express');

const app = express();

app.use((req, resp, next) => {
    console.log("Request received!");
    next();
});

app.use((req, resp, next) => {
    resp.status("201");
    next();
});

app.use((req, resp, next) => {
    resp.json({ message: "Your request was succesfull!"});
    next();
});

app.use((req, resp, next) =>{
    console.log("Response sent succesfully!");
});

module.exports = app;
