const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


const app = express();

app.use(bodyParser.json())

const db = require("./config/conntion")


const item = require("./router/item")

app.use("/",item)

const PORT = process.env.PORT || 2020
app.listen(PORT,()=>{
    console.log("server is running on PORT " ,PORT);
})