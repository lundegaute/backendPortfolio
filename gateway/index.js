const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/Part1", proxy("http://localhost:8001"))
//app.use("/part2", proxy("http://localhost:8001"))
//app.use("/part3", proxy("http://localhost:8001"))

app.listen(8000, () => {
    console.log("Gateway is running on Port 8000");
})

