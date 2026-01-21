import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await api.get("/admin/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleStatus = async (id, isActive) => {
    if (!window.confirm("Are you sure you want to change user status?")) {
      return;
    }

    await api.put(`/admin/users/${id}/status`, {
      isActive: !isActive,
    });

    fetchUsers(); // refresh list
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#315262] mb-6">Users</h1>

      <table className="w-full border-collapse bg-white rounded-lg shadow overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 bg-gray-100 border-b">
              Name
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 bg-gray-100 border-b">
              Email
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 bg-gray-100 border-b">
              Role
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 bg-gray-100 border-b">
              Status
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 bg-gray-100 border-b">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-t">
              <td className="p-3 text-sm text-gray-800 border-b">{u.name}</td>
              <td className="p-3 text-sm text-gray-800 border-b">{u.email}</td>
              <td className="p-3 border-b">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    u.role === "admin"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {u.role}
                </span>
              </td>

              <td className="p-3 border-b">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    u.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {u.isActive ? "Active" : "Disabled"}
                </span>
              </td>

              <td className="p-3 text-sm text-gray-800 border-b">
                <button
                  onClick={() => toggleStatus(u._id, u.isActive)}
                  className={`px-3 py-1 rounded text-white ${
                    u.isActive
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {u.isActive ? "Disable" : "Enable"}
                </button>

                <button
                  onClick={async () => {
                    if (!window.confirm("Change user role?")) return;

                    await api.put(`/admin/users/${u._id}/role`, {
                      role: u.role === "admin" ? "user" : "admin",
                    });

                    fetchUsers();
                  }}
                  className="ml-2 px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Make {u.role === "admin" ? "User" : "Admin"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
