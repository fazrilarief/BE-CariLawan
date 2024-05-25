require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { controllerUsers } = require("./routes/users/users.controller");
const { controllerTeams } = require("./routes/teams/teams.controller");
const { controllerPlayers } = require("./routes/players/players.controller");
const { loginController } = require("./routes/auth/login");

app.get("/", async (req, res) => {
  res.send("Welcome to CariLawan API");
});

// Locked Route
app.use("/api/users/", controllerUsers);
app.use("/api/teams/", controllerTeams);
app.use("/api/players/", controllerPlayers);

// Route
app.use("/login", loginController);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is already running at ${PORT}`);
});

module.exports = app;
