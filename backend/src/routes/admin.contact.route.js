import express from "express";
import Contact from "../models/Contact.model.js";
import { protect } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();

// GET all contact queries
router.get("/", protect, adminOnly, async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
});

// Update contact status
router.put("/:id/status", protect, adminOnly, async (req, res) => {
  const { status } = req.body;

  await Contact.findByIdAndUpdate(req.params.id, { status });

  res.json({ message: "Contact status updated" });
});

export default router;
