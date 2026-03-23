import express from "express";
import usersRouter from "./routes/users.js";
const app = express();
app.use(express.json());
app.use("/users", usersRouter);
app.get("/", (req, res) => {
    res.send("API RUNNING WITH TYPESCRIPT");
});
export default app;
//# sourceMappingURL=app.js.map