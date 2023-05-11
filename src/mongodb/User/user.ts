import mongoose from "mongoose";

interface IUser {
    id : String,
    email : String,
    phone : String,
    password : String,
    verification : String,
    registration : String,
}

const userSchema = new mongoose.Schema<IUser>({
  id: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  verification: { type: String, required: true, default : "init" },
  registration: { type: String, required: true, default : "init" },
}); 

const User = mongoose.model<IUser>('User', userSchema)

export default User