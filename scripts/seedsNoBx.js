const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the collection and inserts the teachers and students below
//
// *************************************************************************
// *************************************************************************
// This seeds file DOES NOT populate behaviorData
// *************************************************************************
// *************************************************************************

var MONGODB_URI =
  // process.env.MONGODB_URI || "mongodb://localhost/behavior_db_test";
    process.env.MONGODB_URI || "mongodb://localhost/behavior_db";
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, function(err) {
    // mongoose.connection.db.dropDatabase();
    // console.log("$$$$$$$$$ DATABASE DROPPED $$$$$$$$$");
    if (err) console.log(err);
});

const teacherArray = [];

const teacherSeed = [
  {
    userName: "misstanner@fenceworkshop.com",
    firstName: "Becky",
    lastName: "Tanner",
    authLevel: 3,
    classes: []
  },
  {
    userName: "misscooper@fenceworkshop.com",
    firstName: "Christine",
    lastName: "Cooper",
    authLevel: 3,
    classes: []
  }
];

const studentSeed = [
  {
    userName: "timmyt@gmail.com",
    firstName: "Timmy",
    lastName: "Thomas",
    authLevel: 1
  },
  {
    userName: "marym@gmail.com",
    firstName: "Mary",
    lastName: "Martin",
    authLevel: 1
  },
  {
    userName: "suzys@gmail.com",
    firstName: "Suzy",
    lastName: "Smith",
    authLevel: 1
  },
  {
    userName: "jamesj@gmail.com",
    firstName: "James",
    lastName: "Jones",
    authLevel: 1
  },
  {
    userName: "charliec@gmail.com",
    firstName: "Charlie",
    lastName: "Caroway",
    authLevel: 1
  },
  {
    userName: "bethb@gmail.com",
    firstName: "Beth",
    lastName: "Brewster",
    authLevel: 1
  }
];

const userSeed = [
  {
    userName: "misstanner@fenceworkshop.com",
    authLevel: 3,
  },
  {
    userName: "misscooper@fenceworkshop.com",
    authLevel: 3,
  },
  {
    userName: "misskinneer@fenceworkshop.com",
    authLevel: 5,
  },
  {
    userName: "timmyt@gmail.com",
    authLevel: 1
  },
  {
    userName: "marym@gmail.com",
    authLevel: 1
  },
  {
    userName: "suzys@gmail.com",
    authLevel: 1
  },
  {
    userName: "jamesj@gmail.com",
    authLevel: 1
  },
  {
    userName: "charliec@gmail.com",
    authLevel: 1
  },
  {
    userName: "bethb@gmail.com",
    authLevel: 1
  }
];

const adminSeed = [
  {
  userName: "misskinneer@fenceworkshop.com",
  firstName: "Sarah",
  lastName: "Kinneer",
  authLevel: 5
  }
]

const behaviorSeeds = [
  {
    behaviorName: "sit still in class",
    studentName: "Timmy Thomas"
  },
  {
    behaviorName: "raise hand before speaking",
    studentName: "Mary Martin"
  },
  {
    behaviorName: "use your inside voice",
    studentName: "Suzy Smith"
  }
];

const behaviorSeeds2 = [
  {
    behaviorName: "don't pick your nose",
    studentName: "James Jones"
  },
  {
    behaviorName: "pull up your pants",
    studentName: "Charlie Caroway"
  },
  {
    behaviorName: "treat others with respect",
    studentName: "Beth Brewster"
  }
];

db.Admin.deleteMany({})
  .then(() => db.Admin.insertMany(adminSeed))
  .catch(err =>console.log("INSERT ERR:", err))
  .then(adminData => {
    console.log("ADMINDATA:", adminData);
  });
  
// console.log(userSeed);

db.User.deleteMany({})
  .then(() => db.User.insertMany(userSeed))
  .then(userData => {
    console.log("USERS: ", userData);
  });

db.Teacher.deleteMany({})
  .then(() => db.Teacher.insertMany(teacherSeed))
  .then(teacherData => {
    // console.log(teacherData);
    teacherArray.push(...teacherData);
    // console.log(teacherArray);
    //start this process over for student. Remove process.exit above once we uncomment.
    db.Student.deleteMany({})
      .then(() => db.Student.insertMany(studentSeed))
      .then(studentData => {
        const teacher = teacherArray.filter(object => {
          // return object.userName === "misstanner@fenceworkshop.com"
          return object;
        });
        // console.log("===== teachers: ", teacher)
        db.Teacher.findOneAndUpdate(
          { _id: teacher[0]._id },
          {
            $push: {
              students: [
                studentData[0]._id,
                studentData[1]._id,
                studentData[2]._id
              ]
            }
          },
          { new: true }
        ).then(updatedTeacher => {
          // console.log(updatedTeacher);
          db.Student.findOneAndUpdate(
            { _id: studentData[0]._id },
            { $push: { teachers: updatedTeacher._id } }
          ).then(updatedStudent1 => {
            db.Student.findOneAndUpdate(
              { _id: studentData[1]._id },
              { $push: { teachers: updatedTeacher._id } } 
            ).then(updatedStudent2 => {
              db.Student.findOneAndUpdate(
                { _id: studentData[2]._id },
                {
                  $push: { teachers: updatedTeacher._id }
                } 
              ).then(updatedStudent3 => {
                db.Behavior.deleteMany({}).then(() => {
                  db.Behavior.insertMany(behaviorSeeds).then(behaviorData => {
                    db.Student.findOneAndUpdate(
                      { _id: updatedStudent1._id },
                      { $push: { behaviors: behaviorData[0]._id } },
                      { new: true }
                    ).then(studentWithBehavior1 => {
                      db.Behavior.findOneAndUpdate(
                        { _id: behaviorData[0]._id },
                        {
                          $push: { teachers: updatedTeacher._id },
                          student: studentWithBehavior1._id
                        } 
                      ).then(completeBehavior1 => {
                        db.Teacher.findOneAndUpdate(
                          { _id: updatedTeacher._id },
                          { $push: { behaviors: completeBehavior1._id } },
                          { new: true }
                        ).then(completeTeacher => {
                          // console.log("#1 complete teacher", completeTeacher);
                          // console.log("#1 studentWithBehavior", studentWithBehavior1);
                        });
                      });
                    });

                    db.Student.findOneAndUpdate(
                      { _id: updatedStudent2._id },
                      {
                        $push: { behaviors: behaviorData[1]._id }
                      } 
                    ).then(studentWithBehavior2 => {
                      db.Behavior.findOneAndUpdate(
                        { _id: behaviorData[1]._id },
                        {
                          $push: { teachers: updatedTeacher._id },
                          student: studentWithBehavior2._id
                        } 
                      ).then(completeBehavior2 => {
                        db.Teacher.findOneAndUpdate(
                          { _id: updatedTeacher._id },
                          {
                            $push: { behaviors: completeBehavior2._id }
                          } 
                        ).then(completeTeacher => {
                          // console.log("#2 complete teacher", completeTeacher);
                          // console.log("#2 studentWithBehavior", studentWithBehavior2);
                        });
                      });
                    });

                    db.Student.findOneAndUpdate(
                      { _id: updatedStudent3._id },
                      {
                        $push: { behaviors: behaviorData[2]._id }
                      } 
                    ).then(studentWithBehavior3 => {
                      db.Behavior.findOneAndUpdate(
                        { _id: behaviorData[2]._id },
                        {
                          $push: { teachers: updatedTeacher._id },
                          student: studentWithBehavior3._id
                        } 
                      ).then(completeBehavior3 => {
                        db.Teacher.findOneAndUpdate(
                          { _id: updatedTeacher._id },
                          {
                            $push: { behaviors: completeBehavior3._id }
                          } 
                        ).then(completeTeacher => {
                          // console.log("#3 complete teacher", completeTeacher);
                          // console.log("#3 studentWithBehavior", studentWithBehavior3);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
        db.Teacher.findOneAndUpdate(
          { _id: teacher[1]._id },
          {
            $push: {
              students: [
                studentData[3]._id,
                studentData[4]._id,
                studentData[5]._id
              ]
            }
          } 
        )
          .then(updatedTeacher => {
            // console.log(updatedTeacher);
            db.Student.findOneAndUpdate(
              { _id: studentData[3]._id },
              { $push: { teachers: updatedTeacher._id } } 
            ).then(updatedStudent4 => {
              db.Student.findOneAndUpdate(
                { _id: studentData[4]._id },
                {
                  $push: { teachers: updatedTeacher._id }
                } 
              ).then(updatedStudent5 => {
                db.Student.findOneAndUpdate(
                  { _id: studentData[5]._id },
                  {
                    $push: { teachers: updatedTeacher._id }
                  } 
                ).then(updatedStudent6 => {
                  db.Behavior.insertMany(behaviorSeeds2)
                    // db.Behavior.find()
                    .then(behaviorData => {
                      db.Student.findOneAndUpdate(
                        { _id: updatedStudent4._id },
                        { $push: { behaviors: behaviorData[0]._id } },
                        { new: true }
                      ).then(studentWithBehavior4 => {
                        db.Behavior.findOneAndUpdate(
                          { _id: behaviorData[0]._id },
                          {
                            $push: { teachers: updatedTeacher._id },
                            student: studentWithBehavior4._id
                          } 
                        ).then(completeBehavior4 => {
                          db.Teacher.findOneAndUpdate(
                            { _id: updatedTeacher._id },
                            { $push: { behaviors: completeBehavior4._id } },
                            { new: true }
                          ).then(completeTeacher => {
                            // console.log("#4 complete teacher", completeTeacher);
                            // console.log("#4 studentWithBehavior", studentWithBehavior4);
                          });
                        });
                      });

                      db.Student.findOneAndUpdate(
                        { _id: updatedStudent5._id },
                        {
                          $push: { behaviors: behaviorData[1]._id }
                        } 
                      ).then(studentWithBehavior5 => {
                        db.Behavior.findOneAndUpdate(
                          { _id: behaviorData[1]._id },
                          {
                            $push: { teachers: updatedTeacher._id },
                            student: studentWithBehavior5._id
                          } 
                        ).then(completeBehavior5 => {
                          db.Teacher.findOneAndUpdate(
                            { _id: updatedTeacher._id },
                            {
                              $push: { behaviors: completeBehavior5._id }
                            } 
                          ).then(completeTeacher => {
                            // console.log("#5 complete teacher", completeTeacher);
                            // console.log("#5 studentWithBehavior", studentWithBehavior5);
                          });
                        });
                      });

                      db.Student.findOneAndUpdate(
                        { _id: updatedStudent6._id },
                        {
                          $push: { behaviors: behaviorData[2]._id }
                        } 
                      ).then(studentWithBehavior6 => {
                        db.Behavior.findOneAndUpdate(
                          { _id: behaviorData[2]._id },
                          {
                            $push: { teachers: updatedTeacher._id },
                            student: studentWithBehavior6._id
                          } 
                        ).then(completeBehavior6 => {
                          db.Teacher.findOneAndUpdate(
                            { _id: updatedTeacher._id },
                            {
                              $push: { behaviors: completeBehavior6._id }
                            } 
                          ).then(completeTeacher => {
                            // console.log("#6 complete teacher", completeTeacher);
                            // console.log("#6 studentWithBehavior", studentWithBehavior6);
                            process.exit(0);
                          });
                        });
                      });
                      // process.exit(0);
                    });
                });
              });
            });

          })
          .catch(err => {
            console.error(err);
            process.exit(1);
          });
      });
  });