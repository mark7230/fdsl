import express from "express";
import { sendContactMail } from "../services/mail.service.js";
import Contact from "../models/Contact.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { FirstName, LastName, Subject, email, message } = req.body;

    if (!FirstName || !LastName || !Subject || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 1️⃣ Save contact message to database
    await Contact.create({
      FirstName,
      LastName,
      Subject,
      email,
      message,
    });

    // 2️⃣ Send email via SendGrid
    await sendContactMail({
      FirstName,
      LastName,
      Subject,
      email,
      message,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return res
      .status(500)
      .json({ message: "Failed to send message" });
  }
});

export default router;
