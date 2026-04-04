import express from "express";
import usersRouter from "./routes/users.js";
import postManageRouter from "./routes/post.js";

const app = express();

app.use(express.json());
app.use("/users", usersRouter);
app.use("/posts", postManageRouter);


app.get("/", (req, res) => {
    res.send("API RUNNING WITH TYPESCRIPT");
});



export default app;
