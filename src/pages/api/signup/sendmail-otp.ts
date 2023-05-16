import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'

export default async function handler(req : NextApiRequest, res : NextApiResponse){
  const {emailAddress, mailOTP} = req.body

  try{
    let transporter = await nodemailer.createTransport({
      host: "localhost",
      service: "gmail",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL, // generated ethereal user
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: '"ANMOL SUDHIR CMRIT" <cse.1cr20cs025.anmol.sudhir@gmail.com>', // sender address
      to: emailAddress, // list of receivers
      subject: "Email Verification Code for CMRIT Placement Portal", // Subject line
      text: "Hello world?", // plain text body
      html: `<p>Your 6-digit verification code is : </p><br/>
            <b>${mailOTP}</b>.
            <p>Please do not share the verification code<p>`, // html body
    });

    res.status(200).send({message : `OTP was successfully sent to ${emailAddress}`})

  } catch(err) {
    console.log(err);
    res.status(500).send({message : "Could not send OTP to mail. (Server Error)"})
  }
}