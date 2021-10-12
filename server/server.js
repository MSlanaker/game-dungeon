const express = require("express");
const app = express();
const dotenv = require ("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const blogRoute = require("./routes/blogs");

const routes = require('./routes');


dotenv.config();
app.use(express.json());

// Confirm database name
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/gamedungeon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(console.log("Now connected to Mongodb"))
.catch((err) => console.log(err));





app.use("/api/games", gameRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);



app.listen("5001", () => {
    console.log("Backend is running.");
});

