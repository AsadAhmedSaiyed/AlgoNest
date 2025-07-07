const mongoose = require("mongoose");

const {UsersSchema} = require("../schemas/UsersSchema");

const UsersModel = mongoose.model("user",UsersSchema);

module.exports = {UsersModel};