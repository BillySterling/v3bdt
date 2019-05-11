const db = require("../models");

// This method gets the user's authorization level upon login
module.exports = {
    getAuthLevel: function(req, res) {
        db.User
            .findOne({ userName: req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};