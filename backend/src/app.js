import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.route.js";   // make sure file name is singular
import authRoutes from "./routes/auth.route.js";
import { protect } from "./middleware/auth.middleware.js";
import { adminOnly } from "./middleware/admin.middleware.js";
import adminUserRoutes from "./routes/admin.user.route.js";
import adminContactRoutes from "./routes/admin.contact.route.js";
import enrollmentRoutes from "./routes/enrollment.route.js";
import adminEnrollmentRoutes from "./routes/admin.enrollment.route.js";

const app = express();

app.use(cors({
  origin: "*", // allow all — change later for security
}));

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin/users", adminUserRoutes);
app.use("/api/admin/contacts", adminContactRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/admin/enrollments", adminEnrollmentRoutes);

// Health Check (optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/protected-test", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});


app.get(
  "/api/admin-test",
  protect,
  adminOnly,
  (req, res) => {
    res.json({ message: "Welcome Admin 👑" });
  }
);

export default app;
