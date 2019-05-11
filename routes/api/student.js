const router = require("express").Router();
const studentController = require("../../controllers/studentController");

//Matches with '/api/student/behaviors/:id'
router.route('/behaviors/:id')
  .get(studentController.findAllBehaviorsRefStudent);

//Matches with '/api/student/student/:id'
router.route('/student/:id')
    .get(studentController.findStudentById);

//Matches with '/api/student/behaviorchart/:id'
router.route('/behaviorchart/:id')
    .get(studentController.findBehaviorById);

//Matches with '/api/student/chartdata/:id'
router.route('/chartdata/:id')
    .get(studentController.getChartData);

//Matches with '/api/student/a/:email'
router.route("/a/:email")
  .get(studentController.findByEmail);

module.exports = router;
