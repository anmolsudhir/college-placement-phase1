import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    const {mail, tel, password, verificationToken} = req.body
    if (!verificationToken)
      res.status(401).send({ message: "Verification Session Not Authorized.(401)" });
    else {
      jwt.verify(
        verificationToken, 
        process.env.NEXT_PUBLIC_AUTH_SECRET, 
        (err, data) => {
            if(err)
                res
                  .status(403)
                  .send({
                    message : "Invalid access to verification session.(403)"
                  });
            else
                res
                  .status(200)
                  .send({
                    message: "Session Verified",
                  });
        }
      );
    }
}