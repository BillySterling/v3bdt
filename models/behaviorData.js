const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BehaviorDataSchema = new Schema({
  behaviorDate: { type: String, required: true },     
  behaviorTracking: [{
    behaviorValue: { type: Number, enum: [0, 1], allowNull: true, required: false },
    behaviorTime: { type: Date, default: Date.now(), required: true }
  }],
  behavior: { type: Schema.Types.ObjectId, ref: "Behavior", required: false},
  behaviorCount: { type: Number, default:0, allowNull: true, required: true },  // total number of times this behavior is tracked
  behaviorTotal: { type: Number, default:0, allowNull: true, required: true }  // number of times behavior goal is met
});

const BehaviorData = mongoose.model("BehaviorData", BehaviorDataSchema);

module.exports = BehaviorData;