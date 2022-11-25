var express = require('express');
var router = express.Router();

//Require controller
var userController = require('../controller/user.controller');



// Create a new pet
router.post("/register", userController.create);

// Retrieve all animals
router.get("/users/", userController.findAll);

// Retrieve a single pet with id
router.get("/users/:id", userController.findOne);

// Update a pet with id
router.put("users:id", userController.update);

// Delete a pet with id
router.delete("/users/:id", userController.delete);

// Delete all animals of the database
router.delete("/users/", userController.deleteAll);

module.exports = router;
