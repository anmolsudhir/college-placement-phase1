import { NextApiRequest, NextApiResponse } from "next";
import User from "@/mongodb/User/user";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err.message));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { mail, tel, password } = req.body;
  console.log(req.body);
  console.log(mail, tel, password)
    bcrypt.hash(password, 10, async(err, hash) => {
        console.log("password and hash at create",password, hash)
      if(err){
        console.log(err.message)
        res.status(500).send({message : "Unable to create secure password"})
      }
      else{
        try {
          await User.create({
            email: mail,
            phone: tel,
            password: hash,
          });
        } catch (err) {
          console.log(err.message);
          return res.status(500).send({
            message:
              "Could not create user(Server error). Please try again after some time",
          });
        }
        console.log("done");
        return res
          .status(201)
          .send({ message: `User was created with ${mail} as key` });}
    })
}
