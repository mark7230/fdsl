import axios from "axios";

const API = import.meta.env.VITE_API_URL;

/**
 * USER → Request enrollment
 */
export const requestEnrollment = (courseSlug, token) => {
  return axios.post(
    `${API}/api/enrollments/request`,
    { courseSlug },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

/**
 * USER → Get approved courses
 */
export const getMyCourses = (token) => {
  return axios.get(`${API}/api/enrollments/my-courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/**
 * ADMIN → Get all enrollment requests
 */
export const getAllEnrollments = (token) => {
  return axios.get(`${API}/api/admin/enrollments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/**
 * ADMIN → Approve / Reject enrollment
 */
export const updateEnrollmentStatus = (id, status, token) => {
  return axios.patch(
    `${API}/api/admin/enrollments/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
