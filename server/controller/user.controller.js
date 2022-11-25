const db = require("../models");
const User = db.users;


// Create and Save a new Animal
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Animal model object
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        dateCreated: req.body.dateCreated,
    });

    // Save Animal in the database
    user
        .save()
        .then(data => {
            console.log("user saved in the database: " + data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Animal."
            });
        });
};

// Retrieve all Animals from the database.
exports.findAll = (req, res) => {
    console.log("find All");
};

// Find a single Animal with an id
exports.findOne = (req, res) => {
    console.log("find one");
};

// Update a Animal by the id in the request
exports.update = (req, res) => {
    console.log("Update");
};

// Delete a Animal with the specified id in the request
exports.delete = (req, res) => {
    console.log("delete");
};

// Delete all Animal from the database.
exports.deleteAll = (req, res) => {
    console.log("deleteAll");
};
