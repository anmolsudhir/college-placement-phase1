import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(req : NextApiRequest, res : NextApiResponse){
    const {mail, tel , password} = req.body;
    return res.status(200).send({ name: "anmol" });
}