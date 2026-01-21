import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [enrollments, setEnrollments] = useState([]); // ✅ NEW
  const [loading, setLoading] = useState(true);

  // Load auth from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  // 🔑 Fetch enrollments AFTER login
  useEffect(() => {
    if (!token) {
      setEnrollments([]);
      return;
    }

    const fetchEnrollments = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/enrollments/my-status`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();
        setEnrollments(data.enrollments || []);
      } catch (err) {
        console.error("Failed to fetch enrollments", err);
        setEnrollments([]);
      }
    };

    fetchEnrollments();
  }, [token]);

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setToken(null);
    setEnrollments([]); // ✅ clear enrollments
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        enrollments, // ✅ PROVIDED HERE
        isAuth: !!token,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
