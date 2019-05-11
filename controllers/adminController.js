const db = require("../models");

// Defining methods for the adminController
module.exports = {

    findAllBehaviors: function(req, res) {
        db.Behavior
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(422).json(err));
    },

    createUser: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Create teacher
    createTeacher: function(req, res) {
        db.Teacher
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    createAdmin: function(req, res) {
        db.Admin
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findByEmail: function(req, res) {
        db.Admin
            .findOne({ userName: req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Create student
    createStudent: function(req, res) {
        db.Student
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Link student to teacher/teacher to students


    //Create behavior for a student (will need to specify which student)
    createBehavior: function(req, res) {
        db.Behavior
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};