const db = require("../models");

// Defining methods for the behaviorController
module.exports = {
    //Gets the data associated with a specific behavior
    findBehaviorById: function(req, res) {
        db.Behavior
          .findById(req.params.id)
          .populate("student")
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
};