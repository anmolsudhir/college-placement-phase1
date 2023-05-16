import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import User from "@/mongodb/User/user";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log("connected"))
  .catch(() => console.log("Hehe"))

export default async function handler(req : NextApiRequest, res :NextApiResponse) {
  const { mail, password } = req.body;
  console.log(mail, password)
    const user  = await User.findOne({email : mail});
    console.log(user !== null || user !== undefined)
    if(user)
      bcrypt.compare(password, user.password, async(err, result) => {
        if(err)
          res.status(403).send({ message : "Password Invalid" })
        else{
          const payload = {
              email : user.email,
              phone : user.phone,
          }
          const authToken = await jwt.sign(payload, process.env.NEXT_PUBLIC_AUTH_SECRET)
          res.status(200).send({message : "Logged in", authToken})
        }
      });
    else {
    // console.log(err)
      res.status(404).send({ message : `User with ${mail} not found. Please sign up to create an account`})
    }
}