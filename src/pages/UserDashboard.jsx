import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  const { enrollments = [] } = useAuth(); // ✅ SAFE DEFAULT

  const approved = enrollments.filter(e => e.status === "approved");
  const pending = enrollments.filter(e => e.status === "pending");
  const rejected = enrollments.filter(e => e.status === "rejected");


  return (
    <div className="max-w-6xl mx-auto py-12 px-4 text-white">
      <h1 className="text-3xl font-bold mb-10">
        My Dashboard
      </h1>

      {/* ✅ APPROVED COURSES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 text-green-400">
          ✅ Approved Courses
        </h2>

        {approved.length === 0 ? (
          <p className="text-gray-300">No approved courses yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {approved.map(course => (
              <div
                key={course.courseSlug}
                className="bg-white text-[#315262] rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-bold text-xl capitalize">
                  {course.courseSlug.replace(/-/g, " ")}
                </h3>

                <p className="mt-2 text-sm text-green-600 font-semibold">
                  Approved
                </p>

                <Link
                  to={`/course/${course.courseSlug}`}
                  className="inline-block mt-5 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  View Course
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ⏳ PENDING COURSES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 text-yellow-400">
          ⏳ Pending Approval
        </h2>

        {pending.length === 0 ? (
          <p className="text-gray-300">No pending requests.</p>
        ) : (
          <ul className="space-y-4">
            {pending.map(course => (
              <li
                key={course.courseSlug}
                className="bg-white text-[#315262] rounded-lg p-4 shadow capitalize"
              >
                {course.courseSlug.replace(/-/g, " ")}
                <span className="ml-3 text-yellow-600 font-semibold">
                  Pending
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ❌ REJECTED COURSES */}
      <section>
        <h2 className="text-2xl font-semibold mb-5 text-red-400">
          ❌ Rejected
        </h2>

        {rejected.length === 0 ? (
          <p className="text-gray-300">No rejected requests.</p>
        ) : (
          <ul className="space-y-4">
            {rejected.map(course => (
              <li
                key={course.courseSlug}
                className="bg-white text-[#315262] rounded-lg p-4 shadow capitalize"
              >
                {course.courseSlug.replace(/-/g, " ")}
                <span className="ml-3 text-red-600 font-semibold">
                  Rejected
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}