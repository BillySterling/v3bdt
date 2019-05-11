const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  authLevel: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
  status: {type: Boolean, required: true, default: true},
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;