"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import DealCard from "@/components/DealCard";

export default function DealsPage() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    api.get("/deals").then((res) => setDeals(res.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {deals.map((deal: any) => (
        <DealCard key={deal._id} deal={deal} />
      ))}
    </div>
  );
}
