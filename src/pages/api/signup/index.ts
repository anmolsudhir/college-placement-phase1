import { NextApiRequest, NextApiResponse } from "next";
import User from '@/mongodb/User/user'
import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err.message))

export default async function handler(req : NextApiRequest, res : NextApiResponse){
    const {mail, tel , password} = req.body;
    //console.log(req.body)

      if (await User.exists({ email: mail })) {
        res
          .status(409)
          .send({
            message: `User with e-mail ${mail} already exists. Please try with a different CMRIT e-mail ID`,
          });
      }

      else {
        const verificationToken = await jwt.sign(req.body, process.env.NEXT_PUBLIC_AUTH_SECRET, {expiresIn : '1800s'})
        res.status(200).send({message : "created verififcation token", verificationToken})
      }
}