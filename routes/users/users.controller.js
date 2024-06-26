const express = require("express");
const { prisma } = require("../../config/prisma");
const controllerUsers = express.Router();
const { accessValidation } = require("../auth/validations");

const {
  getAllUsers,
  getUniqueUser,
  createUser,
  editUserById,
  deleteUserById,
} = require("./users.service");

controllerUsers.get("/", async (req, res) => {
  const users = await getAllUsers();

  res.send(users);
});

controllerUsers.get("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await getUniqueUser(parseInt(userId));

    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

controllerUsers.post("/", accessValidation, async (req, res) => {
  try {
    const newUserData = req.body;

    const user = await createUser(newUserData);

    res.send({
      data: user,
      message: "Create user success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

controllerUsers.put("/:id", accessValidation, async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  if (
    !(userData.name && userData.email && userData.password && userData.phone)
  ) {
    return res.status(400).send("Some fields are missing");
  }

  const user = await editUserById(parseInt(userId), userData);

  res.send({
    data: user,
    message: "Edit user success",
  });
});

controllerUsers.delete("/:id", accessValidation, async (req, res) => {
  try {
    const userId = req.params.id;

    await deleteUserById(parseInt(userId));

    res.send("User deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = { controllerUsers };
