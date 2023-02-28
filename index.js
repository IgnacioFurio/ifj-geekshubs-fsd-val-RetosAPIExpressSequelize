const express = require("express");
const app = express();
const db = require('./db/db');
const PORT = 3000;
const { sequelize } = require("./models/index");
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server ready at port ${PORT}`)
})