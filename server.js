const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userlist = [];

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    const userexists = userlist.find(u => u.email === email);
    if (userexists) {
        return res.json("User already exists");
    }

    userlist.push({ name, email, password });
    res.json("Signup successful");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = userlist.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.json("Invalid credentials");
    }

    res.json({ name: user.name, email: user.email });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
