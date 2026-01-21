import express from "express";
import CourseEnrollment from "../models/CourseEnrollment.js";
import { protect } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();

/**
 * ADMIN → VIEW ALL ENROLLMENT REQUESTS
 */
router.get("/", protect, adminOnly, async (req, res) => {
  const enrollments = await CourseEnrollment.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  res.json(enrollments);
});

/**
 * ADMIN → APPROVE / REJECT
 */
router.patch(
  "/:id",
  protect,
  adminOnly,
  async (req, res) => {
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const enrollment = await CourseEnrollment.findById(req.params.id);

    if (!enrollment) {
      return res.status(404).json({ message: "Not found" });
    }

    enrollment.status = status;
    enrollment.approvedAt = status === "approved" ? new Date() : null;
    await enrollment.save();

    res.json({ message: "Enrollment updated", enrollment });
  }
);

export default router;