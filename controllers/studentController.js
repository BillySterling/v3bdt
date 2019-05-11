const db = require("../models");

// Defining methods for the StudentsController
module.exports = {

    //Gets student data by email
    findByEmail: function(req, res) {
        db.Student
            .findOne({ userName: req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Gets the data required to create a given behavior's progress chart
    getChartData: function(req, res) {
        db.BehaviorData
            .find({ behavior: req.params.id })
            .sort({behaviorDate: 1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Gets student data by id
    findStudentById: function(req, res) {
        db.Student
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    //Get each behavior related to the student
    findAllBehaviorsRefStudent: function(req, res) {
        db.Student
            .findById(req.params.id)
            .populate("behaviors")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Gets the data associated with a specific behavior
    findBehaviorById: function(req, res) {
        db.Behavior
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    

  findAll: function(req, res) {
    db.Student
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Student
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Student
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Student
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
