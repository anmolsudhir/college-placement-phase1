import { NextApiRequest, NextApiResponse } from "next";
import User from '@/mongodb/User/user'

type Data = {
  name: string;
};

export default async function handler(req : NextApiRequest, res : NextApiResponse){
    const {mail, tel , password} = req.body;
    // const user = new User({
    //   id : mail.substring(0, mail.length - 4) + tel.substring(tel.length -4),
    //   email : mail,
      

    // })
    return res.status(200).send({ name: "anmol" });
}