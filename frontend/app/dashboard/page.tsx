"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { getToken } from "@/lib/auth";

export default function Dashboard() {
  const [claims, setClaims] = useState<any[]>([]);
  const token = getToken();

  useEffect(() => {
    if (!token) return;

    api
      .get("/claims", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setClaims(res.data))
      .catch((err) => {
        console.error("Unauthorized:", err.response?.status);
      });
  }, [token]);

  if (!token) {
    return <p className="p-6">Please login to view dashboard</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">My Claimed Deals</h1>

      {claims.map((c) => (
        <div key={c._id} className="border p-4 mt-2">
          {c.deal.title} — {c.status}
        </div>
      ))}
    </div>
  );
}
