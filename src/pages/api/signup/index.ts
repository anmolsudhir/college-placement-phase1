import { NextApiRequest, NextApiResponse } from "next";
const User = require('@/mongodb/User/user')
import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err.message))

export default async function handler(req : NextApiRequest, res : NextApiResponse){
    const {mail, tel , password} = req.body;
    console.log(req.body)

      if (await User.exists({ email: mail })) {
        res
          .status(409)
          .send({
            message: `User with e-mail ${mail} already exists. Please try with a different CMRIT e-mail ID`,
          });
      }

      else {
        const verificationToken = await jwt.sign(req.body, process.env.NEXT_PUBLIC_AUTH_SECRET, {expiresIn : '3600s'})
        res.status(200).send({message : "created verififcation token", verificationToken})
      }

      // else{
      //   bcrypt.hash(password, 10, async(err, hash) => {
      //     if(err){
      //       console.log(err.message)
      //       res.status(500).send({message : "Unable to create secure password"})
      //     }
      //     // else{console.log("done");
      //     //   return res
      //     //     .status(201)
      //     //     .send({ message: `User was created with ${mail} as key` });}
      //   })
        
      // }

      // try {
      //   await User.create({
      //     email: mail,
      //     phone: tel,
      //     password: hash,
      //   });
      // } catch (err) {
      //   console.log(err.message);
      //   return res
      //     .status(500)
      //     .send({
      //       message:
      //         "Could not create user(Server error). Please try again after some time",
      //     });
      // }
}