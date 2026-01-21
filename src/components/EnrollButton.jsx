import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { requestEnrollment } from "../api/enrollment.api";

export default function EnrollButton({ courseSlug, price }) {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEnroll = async () => {
    if (!token) {
      setMessage("Please login to request enrollment.");
      return;
    }

    try {
      setLoading(true);
      await requestEnrollment(courseSlug, token);
      setMessage("✅ Your request has been sent to admin for approval.");
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handleEnroll}
        disabled={loading || message}
        className={`px-8 py-4 rounded-xl font-bold text-white
          bg-gradient-to-r from-[#EFAB47] to-[#D4AF37]
          hover:from-[#e6992e] hover:to-[#c29a2e]
          transition-all duration-300 shadow-lg
          disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {loading ? "Sending request..." : "Request Enrollment"}
      </button>

      {message && (
        <p className="mt-4 text-sm text-[#315262]">{message}</p>
      )}
    </div>
  );
}