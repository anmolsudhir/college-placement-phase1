import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import User from "@/mongodb/User/user";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from "cookie"


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
          try{
            const authToken = await jwt.sign(payload, process.env.NEXT_PUBLIC_AUTH_SECRET)
            res.statusCode = 200;
            res.setHeader(
              "Set-cookie",
              cookie.serialize("authToken", authToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
              })
            );
            res.json({ message: "Logged in", authToken });}
          catch(err){
            console.log(err)
            res
              .status(404)
              .send({
                message: `Could Not create authentication token for user ${user.email}`,
              });
          }
        }
      });
    else {
    // console.log(err)
      res.status(404).send({ message : `User with ${mail} not found. Please sign up to create an account`})
    }
}