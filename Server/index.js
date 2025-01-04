const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const loginRoutes = require("./routes/loginRoutes");
const adminRoutes = require("./routes/adminRoutes");
const projectManagerRoutes = require("./routes/projectManagerRoutes");
const developerRoutes = require("./routes/developerRoutes");
const PORT = process.env.PORT || 4500;

const corsOptions = {
    origin: process.env.APPLICATION_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

// connect Database
mongoose
    .connect(process.env.db)
    .then(() => {
        console.log(`DB connected successfully`);
    })
    .catch((err) => console.log(err));

app.use(cors(corsOptions));
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/admin", adminRoutes);
app.use("/project_manager", projectManagerRoutes);
app.use("/developer", developerRoutes);

// listen server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
