import { Router } from "express";
import { sendMessage } from "../twilio/service";
const router = Router();

router.post("/send_message", sendMessage);

export default router;