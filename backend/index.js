const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fileupload = require("express-fileupload");
const route = require("./routes/routes");
require("dotenv").config();

const port = process.env.PORT || 4000;

mongoose.connect(process.env.LOCAL_MONGO_URI, { useNewUrlParser: true });

mongoose.connection.on('error', (err) => {
    console.log('Error in the database:', err);
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileupload());
app.use("/api", route);

app.listen(port);
