import app from "../app.js";

app.get("/users", (req, res) => {
    res.json({
        message: "List of users"
    })
})