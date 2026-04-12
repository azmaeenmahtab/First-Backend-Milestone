import express from "express";
import usersRouter from "./routes/users.js";
import postManageRouter from "./routes/post.js";
import authsignuprouter from "./routes/auth/signup.js"

const app = express();

app.use(express.json());
app.use("/auth", authsignuprouter);
app.use("/posts", postManageRouter);


app.get("/", (req, res) => {
    res.send("API RUNNING WITH TYPESCRIPT");
});



export default app;
