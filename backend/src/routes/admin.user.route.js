import express from "express";
import User from "../models/User.model.js";
import { protect } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();

// GET all users (admin only)
router.get("/", protect, adminOnly, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// Enable / Disable user
router.put("/:id/status", protect, adminOnly, async (req, res) => {
  const { isActive } = req.body;

  await User.findByIdAndUpdate(req.params.id, { isActive });

  res.json({ message: "User status updated" });
});

// Change user role
router.put("/:id/role", protect, adminOnly, async (req, res) => {
  const { role } = req.body;

  if (!["admin", "user"].includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }

  await User.findByIdAndUpdate(req.params.id, { role });

  res.json({ message: "User role updated" });
});


export default router;
