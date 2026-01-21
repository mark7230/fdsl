import React from "react";
import { Link } from "react-router-dom";

export default function RequestInfoButton({ fullWidth = false }) {
  return (
    <Link
      to="/about"
      className={`
        btn-blue inline-block px-6 py-3 rounded transition shadow
        ${fullWidth ? 'w-full' : 'w-full sm:w-auto'}
      `}
    >
      Request Info
    </Link>
  );
}