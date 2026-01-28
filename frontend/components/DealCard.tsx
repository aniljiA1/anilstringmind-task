import Link from "next/link";

export default function DealCard({ deal }: any) {
  return (
    <div className="relative border rounded-lg p-4">
      {deal.locked && (
        <div className="absolute inset-0 bg-black/60 text-white flex items-center justify-center">
          Locked – Verification Required
        </div>
      )}

      <h3 className="font-semibold">{deal.title}</h3>
      <p className="text-sm text-gray-500">{deal.description}</p>

      <Link href={`/deals/${deal._id}`} className="text-blue-600 text-sm">
        View Details
      </Link>
    </div>
  );
}
