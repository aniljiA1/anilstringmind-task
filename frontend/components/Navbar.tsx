"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  // 🔥 KEY LINE: avoid hydration mismatch
  if (!isMounted) return null;

  return (
    <nav className="p-4 border-b flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/deals">Deals</Link>
      <Link href="/dashboard">Dashboard</Link>

      <div className="ml-auto">
        {isAuth ? (
          <button onClick={handleLogout} className="text-red-600">
            Logout
          </button>
        ) : (
          <Link href="/auth/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
