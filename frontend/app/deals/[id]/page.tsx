"use client";

import { useEffect, useState, use } from "react";
import api from "@/lib/api";
import { getToken } from "@/lib/auth";

export default function DealDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // ✅ unwrap params properly
  const [deal, setDeal] = useState<any>(null);

  useEffect(() => {
    api.get(`/deals/${id}`).then((res) => setDeal(res.data));
  }, [id]);

  const claimDeal = async () => {
    await api.post(
      `/claims/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );
    alert("Deal claimed");
  };

  if (!deal) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{deal.title}</h1>
      <p className="mt-2">{deal.description}</p>

      <button
        onClick={claimDeal}
        className="mt-4 px-4 py-2 bg-black text-white"
      >
        Claim Deal
      </button>
    </div>
  );
}
