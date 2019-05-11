const router = require("express").Router();
const pageRoutesController = require("../../controllers/pageRoutesController");

//Matches with '/api/pageRoutes/a/:email'
router.route('/a/:email')
    .get(pageRoutesController.getAuthLevel);

module.exports = router;
