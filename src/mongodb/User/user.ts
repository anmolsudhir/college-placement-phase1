import mongoose from "mongoose";

interface IUser {
    email : String,
    phone : String,
    password : String,
    verification : String,
    registration : String,
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: (v) => {
                            if(v.match(/^[a-z]{4,6}[0-9]{2}[a-z]{2}@cmrit.ac.in$/)) return true;
                            else return false
                        },
      message: (props) => `${props.value} is not of desired form`,
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => v.match(/^[6-9][0-9]{9}\s*$/),
      message: (props) => `${props.value} is not of desired form`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  verification: {
    type: String,
    default: "init",
    lowercase: true,
    completedAt: { type: Date },
  },
  registration: {
    type: String,
    default: "init",
    lowercase: true,
    completedAt: { type: Date },
  },
}); 

userSchema.index({email : 1});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User