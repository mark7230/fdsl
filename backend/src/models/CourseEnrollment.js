import mongoose from "mongoose";

const courseEnrollmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    courseSlug: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    approvedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Prevent duplicate requests
courseEnrollmentSchema.index(
  { user: 1, courseSlug: 1 },
  { unique: true }
);

export default mongoose.model(
  "CourseEnrollment",
  courseEnrollmentSchema
);