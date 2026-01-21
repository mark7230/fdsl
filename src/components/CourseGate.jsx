import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function CourseGate({ children }) {
  const { isAuth } = useAuth();

  // 🔓 Logged-in users see full content
  if (isAuth) {
    return <>{children}</>;
  }

  // 🔒 Logged-out users see CTA
  return ( 
    <div className="bg-gray-100 border rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-3 text-[#315262]">
        Login required to continue
      </h3>
      <p className="mb-6 text-gray-600">
        Please login or sign up to view the full course and enroll.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/login"
          className="px-6 py-2 bg-[#315262] text-white rounded"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-2 border rounded"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}