"use client";

import { useState } from "react";
import { signOut } from "../../../app/(auth)/actions";

export default function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async (event) => {
    event.preventDefault();
    setLoading(true);
    await signOut();
    setLoading(false);
  };

  return (
    <button
      className="bg-gray-600 text-white text-sm px-4 py-2 rounded-md cursor-pointer"
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? "Signing out..." : "Sign out"}
    </button>
  );
}
