import { Outlet } from "react-router-dom";

// layout
import { Navbar } from "@/components/layout/navbar";

export function Layout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
