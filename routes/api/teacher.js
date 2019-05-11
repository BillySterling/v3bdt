const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");
const studentController = require("../../controllers/studentController");
// const behaviorController = require("../../controllers/studentController");

//Matches with '/api/teacher/behaviors/:id'
router.route('/behaviors/:id')
  .get(teacherController.findAllBehaviorsRefTeacher);
//.post(teacherController.create);

//Matches with '/api/teacher/student/:id'
router.route('/student/:id')
    .get(studentController.findStudentById);
    //.post(teacherController.create);

//Matches with '/api/teacher/behaviorchart/:id'
router.route('/behaviorchart/:id')
    .get(teacherController.findBehaviorById);
    //.post(teacherController.create);

//Matches with '/api/teacher/saveratings'
router.route('/saveratings')
    .put(teacherController.saveRatings);

//Matches with '/api/teacher/chartdata/:id'
router.route('/chartdata/:id')
    .get(teacherController.getChartData);

router.route("/a/:email")
  .get(teacherController.findByEmail);

module.exports = router;
