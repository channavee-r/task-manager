const express = require("express");
require("./db/mongoose");
const auth = require("../src/middleware/auth");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/tasks");
const User = require("./models/user");
const Task = require("./models/tasks");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("server started at", port);
});
