import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../auth/AuthContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // 1️⃣ Register user
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      // 2️⃣ Auto-login after signup
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data.token, res.data.user);

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-center text-[#315262] mb-6">
        Create an Account
      </h2>

      {error && (
        <p className="mb-4 text-center text-red-600 font-medium">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       text-gray-900 bg-white
                       focus:outline-none focus:ring-2 focus:ring-[#315262]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       text-gray-900 bg-white
                       focus:outline-none focus:ring-2 focus:ring-[#315262]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       text-gray-900 bg-white
                       focus:outline-none focus:ring-2 focus:ring-[#315262]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#315262] text-white py-2 rounded-lg font-semibold hover:bg-[#253d4a] transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
