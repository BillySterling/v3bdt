const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  authLevel: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
  classes: [{ type: String, required: false}],
  teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher", required: false}],
  behaviors: [{ type: Schema.Types.ObjectId, ref: "Behavior", required: false}],
  status: {type: Boolean, required: true, default: true},
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
