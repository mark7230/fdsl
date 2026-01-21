import express from "express";
import CourseEnrollment from "../models/CourseEnrollment.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * USER → REQUEST COURSE ACCESS
 */
router.post("/request", protect, async (req, res) => {
  try {
    const { courseSlug } = req.body;

    if (!courseSlug) {
      return res.status(400).json({ message: "Course slug required" });
    }

    const enrollment = await CourseEnrollment.create({
      user: req.user.id,
      courseSlug,
    });

    res.status(201).json({
      message: "Enrollment request sent to admin",
      enrollment,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        message: "Request already sent for this course",
      });
    }

    res.status(500).json({ message: "Server error" });
  }
});


/**
 * USER → GET APPROVED COURSES
 */
router.get("/my-courses", protect, async (req, res) => {
  const enrollments = await CourseEnrollment.find({
    user: req.user.id,
    status: "approved",
  });

  const approvedCourses = enrollments.map(
    (e) => e.courseSlug
  );

  res.json({ approvedCourses });
});

/**
 * USER → GET ALL ENROLLMENT STATUSES
 */
router.get("/my-status", protect, async (req, res) => {
  const enrollments = await CourseEnrollment.find({
    user: req.user.id,
  }).select("courseSlug status createdAt");

  res.json({ enrollments });
});



export default router;