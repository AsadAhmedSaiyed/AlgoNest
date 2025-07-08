const {UsersModel} = require("./model/UsersModel");
const { createSecretToken } = require("./util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username} = req.body;
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UsersModel.create({ email, password, username,initialBalance:0,finalBalance:0 });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await UsersModel.findOne({ email });
    console.log("User : ", user);
    console.log("email : ", user.email);
    if(!user){
      return res.json({message:'Incorrect  email' }) 
    }
    const auth = await bcrypt.compare(password,user.password);
    console.log("db pass : ",password);
    console.log("userPass : ", user.password);
    if (!auth) {
      return res.json({message:'Incorrect password' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true,user });
  } catch (error) {
    console.error(error);
  }
}
