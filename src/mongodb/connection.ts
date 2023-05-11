import mongoose from "mongoose";

mongoose.connect('mongodb://locahost:27017/test').then((val) => console.log(val))