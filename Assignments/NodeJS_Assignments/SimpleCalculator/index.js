/**
 * index.js
 */

"use strict"
const express = require("express");
const operation = require("./operation");
// The path module is also imported to help with file path operations.
const path = require("path");
const PORT_NUMBER = 3000;
/* This app object will be used to set up 
routes and middleware for the server.*/
const app = express();

app.use(express.urlencoded({extended: false}));
app.use("/static", express.static("./views"))

app.post("/submit-form", function(req, res){
    const first = req.body.first;
    const second = req.body.second;
    const operator = req.body.operator;
    const result = operation(first, second, operator);
    res.redirect(303, "/send-result?result=" + result)
});

app.get("/send-result", (req, res)=>{

    res.send(`
    <h3>The result is ${req.query.result}</h3>
    <a href = "/">Another Calculation</a>`)
    console.log(req)
});

app.use("/", function (req, res){
    res.sendFile(path.join(__dirname, "./views/simpleAdder.html"))

});
app.listen(PORT_NUMBER);


