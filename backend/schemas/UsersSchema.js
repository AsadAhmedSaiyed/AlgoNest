const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  initialBalance: {
    type: Number,
  },
  finalBalance: {
    type: Number,
  },
});

UsersSchema.pre("save", async function (next) {
  console.log("Before hashing:", this.password);

  if (!this.isModified("password")) return next(); 
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = { UsersSchema };

