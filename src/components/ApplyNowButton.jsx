import React from "react";
import { Link } from "react-router-dom";

export default function ApplyNowButton({ fullWidth = false }) {
  return (
    <Link
      to="/admission"
      className={`
        btn-amber inline-block px-6 py-3 rounded transition shadow
        ${fullWidth ? 'w-full' : 'w-full sm:w-auto'}
      `}
    >
      Apply Now
    </Link>
  );
}