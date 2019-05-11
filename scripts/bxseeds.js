const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the collection and inserts the teachers and students below

var MONGODB_URI =
  // process.env.MONGODB_URI || "mongodb://localhost/behavior_db_test";
  process.env.MONGODB_URI || "mongodb://localhost/behavior_db";
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, function(err) {
    // mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function(err) {
    if (err) console.log(err);
});

let save = 0;

const behaviorDataSeeds = [
  {
    behaviorDate: "04/22/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/23/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/24/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/25/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/26/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  },

  {
    behaviorDate: "04/22/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/23/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/24/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/25/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/26/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  },

  {
    behaviorDate: "04/22/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/23/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/24/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/25/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/26/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  },

  {
    behaviorDate: "04/22/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/23/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/24/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/25/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/26/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  },

  {
    behaviorDate: "04/22/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/23/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/24/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/25/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/26/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  },

  {
    behaviorDate: "04/22/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-22T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-22T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 30
  },
  {
    behaviorDate: "04/23/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T14:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-23T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-23T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 29
  },
  {
    behaviorDate: "04/24/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T18:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-24T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-24T20:45:00Z"
      }
    ],
    behaviorCount: 26,
    behaviorTotal: 18
  },
  {
    behaviorDate: "04/25/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T15:45:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T17:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-25T19:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-25T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 32
  },
  {
    behaviorDate: "04/26/2019",
    behaviorTracking: [
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T12:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T12:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T13:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T13:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T14:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T14:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T15:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T15:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T16:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T16:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:15:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T17:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T17:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:00:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T18:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T18:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T19:30:00Z"
      },
      {
        behaviorValue: 0,
        behaviorTime: "2019-04-26T19:45:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:00:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:15:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:30:00Z"
      },
      {
        behaviorValue: 1,
        behaviorTime: "2019-04-26T20:45:00Z"
      }
    ],
    behaviorCount: 36,
    behaviorTotal: 27
  }
];

db.Behavior.find().then(bxData => {
console.log("bxData = ", bxData);
db.BehaviorData.deleteMany({}).then(() => {
    db.BehaviorData.insertMany(behaviorDataSeeds).then(
    behaviorTrack => {
        const behaviorTrackIds = behaviorTrack.map(
        j => j._id
        );
        console.log(
        "@@@@@@@@@@@@@ behaviorTrackIds -> ",
        behaviorTrackIds
        );
        console.log(
        "******** Updating behaviorData *********"
        );


        behaviorTrackIds.sort();
        db.Behavior.findOneAndUpdate(
        { _id: bxData[0]._id },
        { $push: { behaviorData:{ $each: [ behaviorTrackIds[0], behaviorTrackIds[1], behaviorTrackIds[2], behaviorTrackIds[3], behaviorTrackIds[4] ] } } },
        { new: true }
        ).then(updatedBehavior => {
        console.log(
            "Updated Behavior 0 // behaviorData 0 - 4 "
        );
        checkSave();
        });

// ----------------------

        // update parent behavior ID
        db.BehaviorData.findOneAndUpdate(
          { _id: behaviorTrackIds[0]._id },
          { $set: { behavior: bxData[0]._id } },
          { new: true }
          ).then(updatedBehaviorRes => {
          console.log(
              "Updated Behavior Ref 0"
          );
          checkSave();
          });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[1]._id },
            { $set: { behavior: bxData[0]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 1"
            );
            checkSave();
            });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[2]._id },
            { $set: { behavior: bxData[0]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 2"
            );
            checkSave();
            });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[3]._id },
              { $set: { behavior: bxData[0]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 3"
              );
              checkSave();
              });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[4]._id },
              { $set: { behavior: bxData[0]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 4"
              );
              checkSave();
              });

// ----------------------

        db.Behavior.findOneAndUpdate(
        { _id: bxData[1]._id },
        { $push: { behaviorData:{ $each: [ behaviorTrackIds[5], behaviorTrackIds[6], behaviorTrackIds[7], behaviorTrackIds[8], behaviorTrackIds[9] ] } } },
        { new: true }
        ).then(updatedBehavior => {
        console.log(
            "Updated Behavior 1 // behaviorData 5 - 9 "
        );
        checkSave();
        });

// ----------------------

        // update parent behavior ID
        db.BehaviorData.findOneAndUpdate(
          { _id: behaviorTrackIds[5]._id },
          { $set: { behavior: bxData[1]._id } },
          { new: true }
          ).then(updatedBehaviorRes => {
          console.log(
              "Updated Behavior Ref 5"
          );
          checkSave();
          });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[6]._id },
            { $set: { behavior: bxData[1]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 6"
            );
            checkSave();
            });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[7]._id },
            { $set: { behavior: bxData[1]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 7"
            );
            checkSave();
            });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[8]._id },
              { $set: { behavior: bxData[1]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 8"
              );
              checkSave();
              });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[9]._id },
              { $set: { behavior: bxData[1]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 9"
              );
              checkSave();
              });

// ----------------------

        db.Behavior.findOneAndUpdate(
        { _id: bxData[2]._id },
        { $push: { behaviorData:{ $each: [ behaviorTrackIds[10], behaviorTrackIds[11], behaviorTrackIds[12], behaviorTrackIds[13], behaviorTrackIds[14] ] } } },
        { new: true }
        ).then(updatedBehavior => {
        console.log(
            "Updated Behavior 2 // behaviorData 10 - 14 "
        );
        checkSave();
        });

// ----------------------
        // update parent behavior ID

        db.BehaviorData.findOneAndUpdate(
          { _id: behaviorTrackIds[10]._id },
          { $set: { behavior: bxData[2]._id } },
          { new: true }
          ).then(updatedBehaviorRes => {
          console.log(
              "Updated Behavior Ref 10"
          );
          checkSave();
          });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[11]._id },
            { $set: { behavior: bxData[2]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 11"
            );
            checkSave();
            });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[12]._id },
            { $set: { behavior: bxData[2]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 12"
            );
            checkSave();
            });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[13]._id },
              { $set: { behavior: bxData[2]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 13"
              );
              checkSave();
              });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[14]._id },
              { $set: { behavior: bxData[2]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 14"
              );
              checkSave();
              });

// ----------------------

        db.Behavior.findOneAndUpdate(
        { _id: bxData[3]._id },
        { $push: { behaviorData:{ $each: [ behaviorTrackIds[15], behaviorTrackIds[16], behaviorTrackIds[17], behaviorTrackIds[18], behaviorTrackIds[19] ] } } },
        { new: true }
        ).then(updatedBehavior => {
        console.log(
            "Updated Behavior 3 // behaviorData 15 - 19 "
        );
        checkSave();
        });

// ----------------------
        // update parent behavior ID

        db.BehaviorData.findOneAndUpdate(
          { _id: behaviorTrackIds[15]._id },
          { $set: { behavior: bxData[3]._id } },
          { new: true }
          ).then(updatedBehaviorRes => {
          console.log(
              "Updated Behavior Ref 15"
          );
          checkSave();
          });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[16]._id },
            { $set: { behavior: bxData[3]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 16"
            );
            checkSave();
            });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[17]._id },
            { $set: { behavior: bxData[3]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 17"
            );
            checkSave();
            });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[18]._id },
              { $set: { behavior: bxData[3]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 18"
              );
              checkSave();
              });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[19]._id },
              { $set: { behavior: bxData[3]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 19"
              );
              checkSave();
              });

// ----------------------

        db.Behavior.findOneAndUpdate(
        { _id: bxData[4]._id },
        { $push: { behaviorData:{ $each: [ behaviorTrackIds[20], behaviorTrackIds[21], behaviorTrackIds[22], behaviorTrackIds[23], behaviorTrackIds[24] ] } } },
        { new: true }
        ).then(updatedBehavior => {
        console.log(
            "Updated Behavior 4 // behaviorData 20 - 24 "
        );
        checkSave();
        });

// ----------------------
        // update parent behavior ID

        db.BehaviorData.findOneAndUpdate(
          { _id: behaviorTrackIds[20]._id },
          { $set: { behavior: bxData[4]._id } },
          { new: true }
          ).then(updatedBehaviorRes => {
          console.log(
              "Updated Behavior Ref 20"
          );
          checkSave();
          });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[21]._id },
            { $set: { behavior: bxData[4]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 21"
            );
            checkSave();
            });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[22]._id },
            { $set: { behavior: bxData[4]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 22"
            );
            checkSave();
            });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[23]._id },
              { $set: { behavior: bxData[4]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 23"
              );
              checkSave();
              });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[24]._id },
              { $set: { behavior: bxData[4]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 24"
              );
              checkSave();
              });

// ----------------------

        db.Behavior.findOneAndUpdate(
        { _id: bxData[5]._id },
        { $push: { behaviorData:{ $each: [ behaviorTrackIds[25], behaviorTrackIds[26], behaviorTrackIds[27], behaviorTrackIds[28], behaviorTrackIds[29] ] } } },
        { new: true }
        ).then(updatedBehavior => {
        console.log(
            "Updated Behavior 5 // behaviorData 25 - 29 "
        );
        checkSave();
        });  

// ----------------------
        // update parent behavior ID

        db.BehaviorData.findOneAndUpdate(
          { _id: behaviorTrackIds[25]._id },
          { $set: { behavior: bxData[5]._id } },
          { new: true }
          ).then(updatedBehaviorRes => {
          console.log(
              "Updated Behavior Ref 25"
          );
          checkSave();
          });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[26]._id },
            { $set: { behavior: bxData[5]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 26"
            );
            checkSave();
            });

          db.BehaviorData.findOneAndUpdate(
            { _id: behaviorTrackIds[27]._id },
            { $set: { behavior: bxData[5]._id } },
            { new: true }
            ).then(updatedBehaviorRes => {
            console.log(
                "Updated Behavior Ref 27"
            );
            checkSave();
            });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[28]._id },
              { $set: { behavior: bxData[5]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 28"
              );
              checkSave();
              });

            db.BehaviorData.findOneAndUpdate(
              { _id: behaviorTrackIds[29]._id },
              { $set: { behavior: bxData[5]._id } },
              { new: true }
              ).then(updatedBehaviorRes => {
              console.log(
                  "Updated Behavior Ref 29"
              );
              checkSave();
              });

// ----------------------

    }); 
});
});

  function checkSave() {
    save++;
    if (save === 36) {
    // if (save === 6) {
      console.log("+++++ SEEDS COMPLETE ++++++");
      process.exit(0);
    };
  };
