import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";


export default function AdminLayout({ children }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#315262] text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

          <nav className="space-y-4">
            <Link to="/admin" className="block text-white hover:underline">
              Dashboard
            </Link>
            <Link to="/admin/users" className="block text-white hover:underline">
              Users
            </Link>
            <Link to="/admin/contacts" className="block text-white hover:underline">
              Contact Queries
            </Link>
            <Link to="/admin/enrollments" className="block text-white hover:underline">
              Enrollment Request
            </Link>
          </nav>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="mt-8 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

