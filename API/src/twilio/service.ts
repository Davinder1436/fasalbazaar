const accountSid = "";
const authToken = "";
const client = require("twilio")(accountSid, authToken);
import { Request, Response } from "express";
export const sendMessage = async (req: Request, res: Response) => {
  try {
    const message = await client.messages.create({
      body: req.body.message,
      to: req.body.to,
      from: "+12345678901",
    });
    res.json({ sucess: true, message_sent: req.body.message, to: req.body.to });
    console.log(message);
  } catch (error) {
    res.status(401).send("An error occurred");
    console.error(error);
  }
};
