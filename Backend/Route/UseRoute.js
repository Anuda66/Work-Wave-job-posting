const express = require("express");
const route = express.Router();
//insert model
const User = require("../Model/UseModel");
//inser user controler
const UserController = require("../Controlers/UserControlles");

route.get("/",UserController.getAllUser);
route.post("/",UserController.addUser);
route.get("/:id",UserController.getById);
route.get("/:id",UserController.updateUser);

//export
module.exports = route;