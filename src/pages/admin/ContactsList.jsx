import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await api.get("/admin/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const updateStatus = async (id, status) => {
    await api.put(`/admin/contacts/${id}/status`, { status });
    fetchContacts();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#315262] mb-6">
        Contact Queries
      </h1>

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
              Subject
            </th>
            <th className="p-3 text-left text-sm font-semibold text-gray-700 bg-gray-100 border-b">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id} className="border-t">
              <td className="p-3 text-sm text-gray-800 border-b">
                {c.FirstName} {c.LastName}
              </td>
              <td className="p-3 text-sm text-gray-800 border-b">{c.email}</td>
              <td className="p-3 text-sm text-gray-800 border-b">
                {c.Subject}
              </td>
              <td className="p-3 text-sm text-gray-800 border-b">
                <select
                  value={c.status}
                  onChange={(e) => updateStatus(c._id, e.target.value)}
                  className="border rounded p-1"
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="resolved">Resolved</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
