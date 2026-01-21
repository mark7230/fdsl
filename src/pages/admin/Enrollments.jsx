import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";

const API = import.meta.env.VITE_API_URL;

export default function Enrollments() {
  const { token } = useAuth();
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/admin/enrollments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setEnrollments(data));
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(`${API}/api/admin/enrollments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    setEnrollments(prev =>
      prev.map(e =>
        e._id === id ? { ...e, status } : e
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Course Enrollment Requests</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Course</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {enrollments.map(e => (
            <tr key={e._id}>
              <td>{e.user?.name}</td>
              <td>{e.user?.email}</td>
              <td>{e.courseSlug}</td>
              <td>{e.status}</td>
              <td>
                {e.status === "pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(e._id, "approved")}
                      className="bg-green-500 text-white px-2 py-1 mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(e._id, "rejected")}
                      className="bg-red-500 text-white px-2 py-1"
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
